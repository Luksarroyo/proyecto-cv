import React, { useState } from "react";
import Counter from "./Counter";
// 5to recibo la funcion on add de detalleProducto
const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [errorMessage, setErrorMessage] = useState();
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Stock insuficiente");
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Stock insuficiente");
    }
  };
  return (
    <div>
      <Counter
        counter={counter}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default CounterContainer;
