import React from "react";
import style from "./Cart.module.css";

const Cart = ({
  cart,
  clearCartAlert,
  deleteProductoById,
  total,
  navigate,
}) => {
  return (
    <div>
      <h1 className={style.titulo}>Lista de Compras</h1>
      {cart.map((e) => (
        <div className={style.container} key={e.id}>
          <div className={style.descripcion}>
            <img className={style.img} src={e.img} alt="" />
            <div>
              <h1>{e?.titulo}</h1>
              <span>{e.descripcion}</span>
            </div>
            <p className={style.precio}>Precio:${e?.precio}</p>
          </div>
          <p className={style.cantidad}>Cantidad de productos {e.quantity}</p>
          <button
            className={style.button}
            onClick={() => deleteProductoById(e.id)}
          >
            Eliminar Producto
          </button>
        </div>
      ))}
      <h1 className={style.totalCompra}>El total de su compra es ${total}</h1>
      {/* tecnica de rendering condicionado con && */}
      {cart.length > 0 && (
        <div>
          <button
            className={style.button}
            onClick={() => navigate("/checkout")}
          >
            Terminar Compra
          </button>
          <button className={style.button} onClick={clearCartAlert}>
            Limpiar el Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
