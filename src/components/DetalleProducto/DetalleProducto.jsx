import React from 'react'
import style from "./Detalle.module.css"


const DetalleProducto = ({items}) => {
  return (
    items.map((elemento) => {
      return (
        <div>
          <div className={style.container}>
            <img className={style.imagen} src={elemento.img} alt="" />
            <div className={style.info} >
            <h1 className={style.titulo}>{elemento.titulo}</h1>
            <h2 className={style.descripcion}>{elemento.descripcion}</h2>
            <h3 className={style.precio}>${elemento.precio}</h3>
            <button className={style.buttom}>COMPRAR</button>
            </div>
          </div>
        </div>
        );
      }
    )
)
}

export default DetalleProducto