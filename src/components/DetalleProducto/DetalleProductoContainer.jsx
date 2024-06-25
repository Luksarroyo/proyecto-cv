import React, { useContext, useEffect, useState } from "react";
import DetalleProducto from "./DetalleProducto";
import { items } from "../../ItemsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const DetalleProductoContainer = () => {
  const [producto, setProducto] = useState({});

<<<<<<< HEAD
    useEffect (() => {
      let idEncontrado = items.find((producto) => producto.id === +id);
      setProducto (idEncontrado);
    }, [id]);
  
=======
  const { agregarAlCarrito } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let idEncontrado = items.find((prod) => prod.id === +id);
    setProducto(idEncontrado);
  }, [id]);

  // 1erpaso: creo una funcion onadd que me permite agregar cosas al carrito,
  // lo creo en detalleProducto por que tengo la info de los productos
  const onAdd = (cantidad) => {
    // creo el objeto data que contenga toda la info de producto mas la cantidad
    let data = {
      ...producto,
      quantity: cantidad
    };
    
  agregarAlCarrito(data);

  };
  // 2do paso: paso la funcion onAdd a detalleProducto
>>>>>>> context
  return (
    <div>
      <DetalleProducto producto={producto} onAdd={onAdd} />
    </div>
  );
};

export default DetalleProductoContainer;
