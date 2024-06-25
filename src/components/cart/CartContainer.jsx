import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../Context/CartContext";

const CartContainer = () => {
  const { cart, clearCart,deleteProductoById, totalPrecio } = useContext(CartContext);
  let total = totalPrecio()
  return (
    <div>
      <Cart cart={cart} clearCart={clearCart} deleteProductoById={deleteProductoById} total= {total} />;
    </div>
  );
};

export default CartContainer;
