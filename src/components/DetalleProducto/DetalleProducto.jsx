<<<<<<< HEAD
import React from 'react'
import style from "./Detalle.module.css"
import CounterCountainer from '../Counter/CounterCountainer';
=======
import React from "react";
import style from "./Detalle.module.css";
import CounterContainer from "../Counter/CounterContainer";
>>>>>>> context

//3er paso: Recibo la funcion onAdd para poder usarla
const DetalleProducto = ({ producto, onAdd }) => {
  return (
<<<<<<< HEAD
    items.map((elemento) => {
      return (
        <div>
          <div className={style.container}>
            <img className={style.imagen} src={elemento.img} alt="" />
            <div className={style.info} >
            <h1 className={style.titulo}>{elemento.titulo}</h1>
            <h2 className={style.descripcion}>{elemento.descripcion}</h2>
            <h3 className={style.precio}>${elemento.precio}</h3>
            <CounterCountainer/>
            <button className={style.buttom}>COMPRAR</button>
            </div>
          </div>
=======
    <div className={style.container}>
      <div className={style.cardContainer}>
        <img className={style.imagen} src={producto.img} alt="" />
        <div className={style.info}>
          <h1>{producto.titulo}</h1>
          <h2>{producto.descripcion}</h2>
          <h3>${producto.precio}</h3>
          {/* 4to paso: le paso onAdd  a counter container*/}
          <CounterContainer stock={producto.stock} onAdd={onAdd} />
>>>>>>> context
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
