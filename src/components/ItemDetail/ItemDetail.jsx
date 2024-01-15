import React from 'react'

 export const ItemDetail = ({product}) => {
  return (
    <div>
    <h2>{product.titulo}</h2>
    <h3>{product.categoria}</h3>
    </div>
)
}

