import CartWidget from "../CartWidget/CartWidget";
import style from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../../lib/constants";
// import { getLinkClasses } from "../../lib/utils";

const Navbar = () => {
  let location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={style.containerNavbar}>
        <div className={style.logo}>
          <img
            src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1703845527/tienda%20cafe/da871c525be54819b7ecf9176a53bf0a_xhox2b.png"
            alt="logo empresa"
          />
        </div>
        <div className={style.menuListContainer}>
          <div className={style.menuButton} onClick={toggleMenu}>
            <div
              className={`${style.burger} ${menuOpen ? style.open : ""}`}
            ></div>
          </div>
          <ul
            className={`${style.containerList} ${menuOpen ? style.show : ""}`}
          >
            {MENU_ITEMS.map((item) => (
              <Link
                to={item.path}
                className={`${style.itemMenu}
              ${location.pathname === item.path ? style.activo : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <Link
          to="/cart"
          className={`${style.cart}
              ${location.pathname === "/cart" ? style.activo : ""}`}
        >
          <CartWidget />
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
