import React from "react";
import style from "./Detalle.module.css";
import CounterContainer from "../Counter/CounterContainer";

const DetalleProducto = ({ producto, onAdd }) => {
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <div className={style.contenedorImg}>
          <img src={producto.img} alt="" />
        </div>
        <div className={style.info}>
          <h1>{producto.titulo}</h1>
          <p>{producto.descripcion}</p>
          <h3>${producto.precio}</h3>

          {producto.stock > 0 ? (
            <div className={style.buttonCounter}>
              <CounterContainer stock={producto.stock} onAdd={onAdd} />
            </div>
          ) : (
            <h2>No hay stock</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
