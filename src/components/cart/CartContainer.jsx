import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductoById, totalPrecio } =
    useContext(CartContext);
  let total = totalPrecio();

  const navigate = useNavigate();
  // uso sweetalert2
  const clearCartAlert = () => {
    Swal.fire({
      title: "Esta seguro de eliminar todos los Productos?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar todos los producto!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Producto eliminado!",
          text: "Sus productos fueron eliminados.",
          icon: "success",
        });
      }
    });
  };
  const clearProductAlert = (id) => {
    Swal.fire({
      title: "Esta seguro de eliminar el Producto?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar producto!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductoById(id);
        Swal.fire({
          title: "Producto eliminado!",
          text: "Su producto fue eliminado.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <Cart
        navigate={navigate}
        cart={cart}
        clearCart={clearCart}
        deleteProductoById={deleteProductoById}
        total={total}
        clearCartAlert={clearCartAlert}
        clearProductAlert={clearProductAlert}
      />
      ;
    </div>
  );
};

export default CartContainer;
