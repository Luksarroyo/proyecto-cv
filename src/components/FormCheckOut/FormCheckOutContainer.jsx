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
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const FormCheckOutContainer = () => {
  // logica para textfild

  // Crear un TextField personalizado usando `styled`
  const CustomTextField = styled(TextField)({
    "& .MuiFilledInput-root": {
      backgroundColor: "#c8a502",
      "&:hover": {
        backgroundColor: "#eed04a",
      },
      "&.Mui-focused": {
        backgroundColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiFormHelperText-root": {
      color: "#c8a502",
    },
  });
  const currencies = [
    {
      value: "Argentina",
      label: "Argentina",
    },
    {
      value: "Brazil",
      label: "Brazil",
    },
    {
      value: "Chile",
      label: "Chile",
    },
    {
      value: "Paraguay",
      label: "Paraguay",
    },
  ];

  // logica propia de la pagina
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
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      numeracion: "",
      ciudad: "",
      codigoPostal: "",
      provincia: "",
      pais: "",
      nombreTitular: "",
      numeroTarjeta: "",
      numeroExpiracion: "",
      codigoSeguridad: "",
    },

    onSubmit: checkoutFn,

    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es Obligatorio"),
      email: Yup.string()
        .required("Este campo es Obligatorio")
        .email("Debe ingresar un email valido"),
      telefono: Yup.number().required("Este campo es Obligatorio"),
      direccion: Yup.string().required("Este campo es Obligatorio"),
      numeracion: Yup.number().required("Este campo es Obligatorio"),
      ciudad: Yup.string().required("Este campo es Obligatorio"),
      codigoPostal: Yup.number().required("Este campo es Obligatorio"),
      provincia: Yup.string().required("Este campo es Obligatorio"),
      pais: Yup.string().required("Este campo es Obligatorio"),
      nombreTitular: Yup.string().required("Este campo es Obligatorio"),
      numeroTarjeta: Yup.number().required("Este campo es Obligatorio"),
      numeroExpiracion: Yup.number().required("Este campo es Obligatorio"),
      codigoSeguridad: Yup.number().required("Este campo es Obligatorio"),
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
          currencies={currencies}
          CustomTextField={CustomTextField}
          values={values}
        />
      )}
    </div>
  );
};

export default FormCheckOutContainer;
