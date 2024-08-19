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
        <div className={style.footerSection}>
          <h4>Contacto</h4>
          <div className={style.infoContacto}>
            <FaPhoneSquareAlt /> <p>351-1111222333</p>
          </div>
          <div className={style.infoContacto}>
            <MdEmail />
            <a href="mailto:doctacoffe@gmail.com">doctacoffe@gmail.com</a>
          </div>
          <div className={style.infoContacto}>
            <FaLocationDot />
            <p>Cordoba, Argentina</p>
          </div>
        </div>
        <div className={style.footerSection}>
          <h4 className={style.eslogan}>
            <GiCoffeeBeans />
            En una ciudad disfrutas todo el mundo
            <GiCoffeeBeans />
          </h4>
        </div>
        <div className={style.footerSection}>
          <h4>Redes Sociales</h4>
          <div className={style.containerRedes}>
            <a href="https://www.instagram.com/doctacoffe/">
              <AiFillInstagram />
            </a>
            <a href="https://www.facebook.com/doctacoffe/">
              <FaFacebookSquare />
            </a>
            <a href="https://www.tiktok.com/@doctacoffe/">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
