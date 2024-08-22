import React from "react";
import style from "./Cart.module.css";

const Cart = ({
  cart,
  clearCartAlert,
  clearProductAlert,
  deleteProductoById,
  total,
  navigate,
}) => {
  return (
    <div>
      <h1 className={style.titulo}>Lista de Compras</h1>
      {cart.map((e) => (
        <div className={style.container} key={e.id}>
          <div className={style.cardContainer}>
            <img className={style.img} src={e.img} alt="" />
            <div className={style.descripcion}>
              <h1>{e?.titulo}</h1>
              <span>{e.descripcion}</span>
            </div>
            <p className={style.precio}>Precio:${e?.precio}</p>
          </div>
          <p className={style.cantidad}>Cantidad de productos {e.quantity}</p>
          <button
            className={style.button}
            onClick={() => clearProductAlert(e.id)}
          >
            Eliminar Producto
          </button>
        </div>
      ))}
      {cart.length > 0 ? (
        <div>
          <h2 className={style.totalCompra}>
            El total de su compra es ${total}
          </h2>
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
      ) : (
        <div className={style.carritoVacioContainer}>
          <img
            src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1724345382/tienda%20cafe/dibujo_cafe_yonqim.png"
            alt=""
          />
          <h2>Agregar productos al carrito</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
