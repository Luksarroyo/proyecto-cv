import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'

const CartContainer = () => {
  const { cart, clearCart,deleteProductoById, totalPrecio } = useContext(CartContext);
  let total = totalPrecio()
// uso sweetalert2
  const clearCartAlert= ()=>{
    Swal.fire({
      title: "Esta seguro de eliminar?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar producto!"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire({
          title: "Producto eliminado!",
          text: "Su producto fue eliminado.",
          icon: "success"
        });
      }
    });
  }
  return (
    <div>
      <Cart cart={cart} clearCart={clearCart} deleteProductoById={deleteProductoById} total= {total} 
      clearCartAlert={clearCartAlert} />;
    </div>
  );
};

export default CartContainer;
