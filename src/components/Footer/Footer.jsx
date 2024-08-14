import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div className={style.containerFooter}>
        <div>
          <div>
            <h3>Contacto</h3>
          </div>
          <div className={style.infoContacto}>
            <FaPhoneSquareAlt /> 351-1111222333
          </div>
          <div className={style.infoContacto}>
            <MdEmail /> Doctacoffe@gmail.com
          </div>
          <div className={style.infoContacto}>
            <FaLocationDot /> Cordoba, Argentina
          </div>
        </div>
        <h2 className={style.eslogan}>
          <GiCoffeeBeans />
          En una ciudad disfrutas todo el mundo
          <GiCoffeeBeans />
        </h2>
        <div>
          <div>
            <h3>Redes Sociales</h3>
          </div>
          <div className={style.containerRedes}>
            <div>
              <AiFillInstagram />
            </div>
            <div>
              <FaFacebookSquare />
            </div>
            <div>
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
