import React, { useEffect, useState } from 'react'
import DetalleProducto from './DetalleProducto'
import { items } from '../../ItemsMock'
import { useParams } from 'react-router-dom';

const DetalleProductoContainer = () => {
  const [producto, setProducto] = useState({});
  
  const {id} = useParams()
  console.log (id)

    useEffect (() => {
      let idEncontrado = items.find((producto) => producto.id === +id);
      setProducto (idEncontrado);
    }, [id]);
  
  return (
    <div>
   <DetalleProducto items= {items}/>
   </div>
);
};

export default DetalleProductoContainer
