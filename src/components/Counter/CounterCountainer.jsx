import React, { useState } from 'react'
import Counter from './Counter';


const CounterCountainer = () => {

const [counter, setCounter] = useState (0);

const sumar = () => {
    setCounter (counter + 1);
};

const restar = () => {
    setCounter (counter - 1);

 }
  return (
    <div>
        <Counter counter = {counter} sumar={sumar} restar={restar}/>
    </div>
  )
}

export default CounterCountainer