import React, { useContext, useEffect, useState } from "react";
import DetalleProducto from "./DetalleProducto";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const DetalleProductoContainer = () => {
  const [producto, setProducto] = useState({});

  const { agregarAlCarrito } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    //--// const itemCollection = aplico metodo collection para que me traiga todos los items de la db
    const itemCollection = collection(db, "items");
    //--// const refDoc = aplico metodo doc para que de los items encontrados en itemcollection me traiga el id.
    //--// el id que necesito esta determinado en el useparams que esta arriba
    const refDoc = doc(itemCollection, id);
    //--// aplica el metodo getDoc y trae la info de refdoc
    getDoc(refDoc)
      //--// getDoc va a devolver una promesa y debo manipularla
      .then((res) => setProducto({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err));
  }, [id]);

  // 1erpaso: creo una funcion onadd que me permite agregar cosas al carrito,
  // lo creo en detalleProducto por que tengo la info de los productos
  const onAdd = (cantidad) => {
    // creo el objeto data que contenga toda la info de producto mas la cantidad
    let data = {
      ...producto,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    // boton de alerta, de sweetalert2
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "El producto fue agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  // 2do paso: paso la funcion onAdd a detalleProducto
  return (
    <div>
      <DetalleProducto producto={producto} onAdd={onAdd} />
    </div>
  );
};

export default DetalleProductoContainer;
