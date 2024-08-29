import React from "react";
import style from "./Counter.module.css";
const Counter = ({ counter, sumar, restar, onAdd, errorMessage }) => {
  return (
    <div className={style.counterContainer}>
      <div className={style.counter}>
        <button onClick={restar}> - </button>
        <h3>{counter}</h3>
        <button onClick={sumar}>+</button>
        {errorMessage ? <p style={{ color: "white" }}>{errorMessage}</p> : ""}
      </div>

      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
