import { FaOpencart } from "react-icons/fa";
// import { Link } from "react-router-dom";
import style from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { cart, totalCantidad } = useContext(CartContext);

  let total = totalCantidad();
  return (
    <div>
      <div>
        <FaOpencart size={35} />
      </div>
      {cart.length > 0 && (
        <div>
          <span className={style.counter}>{total}</span>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
