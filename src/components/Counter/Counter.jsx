import React from 'react'

const Counter = ({counter,sumar, restar}) => {
  return (
    <div>
        <button onClick={sumar}>+</button>
        <h3>{counter}</h3>
        <button onClick={restar}>-</button>
    </div>
  )
}

export default Counter