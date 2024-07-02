import React from "react";
import style from "./Counter.module.css"
// 7to:recibo la funcion onAdd de counterContainer
const Counter = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div className={style.container}>
      <button onClick={sumar}>+</button>
      <h3 className={style.counter}>{counter}</h3>
      <button onClick={restar}> - </button>
      {/* 8to: ejecuto la funcion onadd en un boton */}
      <button onClick={() => onAdd(counter)}>Agragar al carrito</button>
    </div>
  );
};

export default Counter;
