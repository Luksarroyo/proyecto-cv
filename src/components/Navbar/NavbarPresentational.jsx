import CartWidget from "../CartWidget/CartWidget"
import style from "./Navbar.module.css"
import {Link, Outlet} from "react-router-dom"
import { items } from "../../ItemsMock";

const Navbar = () => {
 return <div>
        <div className={style.containerNavbar}>
                <img  className={style.logo}src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1703845527/tienda%20cafe/da871c525be54819b7ecf9176a53bf0a_xhox2b.png" alt="logo empresa" />
                <ul className={style.containerList}>
                    <Link to="/"className= {style.list}>INICIO</Link >
                    <Link to="/categoria/cafe" className= {style.list}>NUESTRO CAFE</Link >
                    <Link to="/categoria/accesorios" className= {style.list} >ACCESORIOS</Link >
                    <Link to="/categoria/maquinasdecafe" className= {style.list} >MAQUINAS DE CAFE</Link >
                    <Link  to="/usuario" className= {style.list}>USUARIO</Link >
                </ul>
               <div className={style.ContainerCart} > <CartWidget/></div>
        </div>
        <Outlet/>
        
    </div>
}
export default Navbar
