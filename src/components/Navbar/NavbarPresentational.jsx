import CartWidget from "../CartWidget/CartWidget";
import style from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../../lib/constants";
import { getLinkClasses } from "../../lib/utils";

const Navbar = () => {
  let location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={style.containerNavbar}>
        <img
          className={style.logo}
          src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1703845527/tienda%20cafe/da871c525be54819b7ecf9176a53bf0a_xhox2b.png"
          alt="logo empresa"
        />
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
                className={getLinkClasses({
                  // item: item,
                  item,
                  classes: style.activo,
                  currentPath: location.pathname,
                })}
              >
                {item.name}
              </Link>
            ))}
            {/* <Link to="/" className={style.list}>
              INICIO
            </Link>
            <Link
              to="/categoria/cafe"
              className={`${style.list} ${
                location.pathname === "/categoria/cafe" ? style.activo : ""
              }`}
            >
              NUESTRO CAFE
            </Link>
            <Link to="/categoria/accesorios" className={style.list}>
              ACCESORIOS
            </Link>
            <Link to="/categoria/maquinasdecafe" className={style.list}>
              MAQUINAS DE CAFE
            </Link>
            <Link to="/login" className={style.list}>
              USUARIO
            </Link> */}
          </ul>
        </div>
        <Link to="/cart" className={style.ContainerCart}>
          <CartWidget />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Navbar;
