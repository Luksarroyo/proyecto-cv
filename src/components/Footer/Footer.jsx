import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div className={style.containerFooter}>
        <table>
          <thead>
            <tr>
              <th scope="col">Contacto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <FaPhoneSquareAlt /> 351-1111222333
            </tr>
            <tr>
              <MdEmail /> Doctacoffe@gmail.com
            </tr>
            <tr>
              <FaLocationDot /> Cordoba, Argentina
            </tr>
          </tbody>
        </table>
        <h2><GiCoffeeBeans />En una ciudad disfrutas todo el mundo<GiCoffeeBeans /></h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Redes Sociales</th>
            </tr>
          </thead>
          <tbody className={style.containerRedes}>
            <tr>
              <AiFillInstagram />
            </tr>
            <tr>
              <FaFacebookSquare />
            </tr>
            <tr>
              <FaTiktok />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
