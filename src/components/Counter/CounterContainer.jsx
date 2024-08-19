import React, { useState } from "react";
import Counter from "./Counter";
// 5to recibo la funcion on add de detalleProducto
const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("stock insuficiente");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("Error");
    }
  };
  return (
    <div>
      <Counter counter={counter} sumar={sumar} restar={restar} onAdd={onAdd} />
    </div>
  );
};

export default CounterContainer;
