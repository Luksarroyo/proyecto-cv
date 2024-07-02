import React from "react";
import style from "./Cart.module.css";


const Cart = ({ cart, clearCartAlert, deleteProductoById, total }) => {
  return (
    <div >
      <h1 className= {style.titulo}>Lista de Compras</h1>
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
          <button className={style.buttom} onClick={() => deleteProductoById(e.id)}>
            Eliminar producto
          </button>
        </div>
      ))}
      <h1 className={style.totalCompra}>El total de su compra es ${total}</h1>
      {/* tecnica de rendering condicionado con && */}
      {cart.length > 0 && (
        <div>
          <button className={style.buttom} >Terminar Compra</button>
          <button className={style.buttom} onClick={clearCartAlert}>Limpiar carrito</button>
          
        </div> 
      )}   
    </div>
  );
};

export default Cart;

