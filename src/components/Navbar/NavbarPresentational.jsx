import CartWidget from "../CartWidget/CartWidget"
import style from "./Navbar.module.css"
import {Outlet} from "react-router-dom"

const Navbar = () => {
 return <div>
        <div className={style.containerNavbar}>
                <img  className={style.logo}src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1703845527/tienda%20cafe/da871c525be54819b7ecf9176a53bf0a_xhox2b.png" alt="logo empresa" />
                <ul className={style.containerList}>
                    <li className= {style.list}>INICIO</li>
                    <li className= {style.list}>NUESTRO CAFE</li>
                    <li className= {style.list}>ACCESORIOS</li>
                    <li className= {style.list}>MAQUINAS DE CAFE</li>
                    <li className= {style.list}>USUARIO</li>
                </ul>
               <div className={style.ContainerCart} > <CartWidget/></div>
        </div>
        <Outlet/>
        
    </div>
}
export default Navbar
