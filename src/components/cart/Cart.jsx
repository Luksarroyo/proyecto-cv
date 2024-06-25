import React from "react";
import style from "./Cart.module.css";

const Cart = ({ cart, clearCart, deleteProductoById, total }) => {
  return (
    <div >
      <h1>Lista de Compras</h1>
      {cart.map((e) => (
        <div className={style.container} key={e.id}>
          <div className={style.descripcion}>
            <img className={style.img} src={e.img} alt="" />
            <div>
              <h1>{e?.titulo}</h1>
              <span>{e.descripcion}</span>
            </div>
            <h3 className= {style.precio}>Precio:${e?.precio}</h3>
          </div>
          <h3 className= {style.cantidad}>Cantidad de productos {e.quantity}</h3>
          <button ClassName={style.buttom} onClick={() => deleteProductoById(e.id)}>
            Eliminar producto
          </button>
        </div>
      ))}
      <h1 className={style.totalCompra}>El total de su compra es ${total}</h1>
      <button className={style.buttom} onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;
