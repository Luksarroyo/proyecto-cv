import FormCheckOut from "./FormCheckOut";
import { useFormik } from "formik";
import { useContext, useState, useEffect } from "react";
// el import de yup es diferente al resto
import * as Yup from "yup";
// importo todo (*) con el nombre (as) Yup desde "yup"
import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const FormCheckOutContainer = () => {
  const { cart, totalPrecio, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (orderId) {
      Swal.fire({
        title: "Su compra registra el código",
        text: `ID: ${orderId}`,
        icon: "success",
      });
    }
  }, [orderId]);

  const checkoutFn = (data) => {
    let total = totalPrecio();

    let ordenCompra = {
      buyer: data,
      items: cart,
      total: total,
    };
    const ordenCollection = collection(db, "ordenes");
    addDoc(ordenCollection, ordenCompra).then((res) => setOrderId(res.id));

    cart.map((items) =>
      updateDoc(doc(db, "items", items.id), {
        stock: items.stock - items.quantity,
      })
    );
    clearCart();
  };
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },

    onSubmit: checkoutFn,

    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es Obligatorio"),
      email: Yup.string()
        .required("Este campo es Obligatorio")
        .email("Debe ingresar un email valido"),
      telefono: Yup.number().required("Este campo es Obligatorio"),
    }),
    validateOnChange: false,
    // de esta forma evito que se valide cada vez que escribo y me tire error todo el tiempo
  });

  return (
    <div>
      {orderId ? null : (
        <FormCheckOut
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
};

export default FormCheckOutContainer;
