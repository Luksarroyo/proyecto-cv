import React from "react";
import style from "./Detalle.module.css";
import CounterContainer from "../Counter/CounterContainer";

//3er paso: Recibo la funcion onAdd para poder usarla
const DetalleProducto = ({ producto, onAdd }) => {
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <img className={style.imagen} src={producto.img} alt="" />
        <div className={style.info}>
          <h1>{producto.titulo}</h1>
          <h2>{producto.descripcion}</h2>
          <h3>${producto.precio}</h3>
          {/* 4to paso: le paso onAdd  a counter container*/}
          <CounterContainer stock={producto.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
