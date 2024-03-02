import style from "./Home.module.css";
import { FaCreditCard } from "react-icons/fa";
import { HiTruck } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";

const Home = () => {
  return (
    <div>
        <div>
      <img
        className={style.img}
        src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1709395356/tienda%20cafe/arte_latte.png_nwaz66.png"
        alt="Arte Latte"
      />
      <p className={style.parrafo}>
        El café es una bebida popular y estimulante que ha desempeñado un papel
        significativo en las sociedades de todo el mundo. Sus orígenes se
        remontan a las antiguas civilizaciones de África, específicamente en las
        regiones de Etiopía, donde se descubrieron por primera vez los granos de
        café. A lo largo de los siglos, el café se propagó a través del comercio
        y la colonización, extendiéndose por el Medio Oriente, Europa y
        finalmente alcanzando América. A medida que el café se difundió, también
        se convirtió en un componente integral de diversas culturas. Se
        establecieron cafeterías en ciudades europeas en el siglo XVII,
        brindando espacios sociales para la discusión y el intercambio de ideas.
        En el siglo XVIII, el café se volvió central en el floreciente
        movimiento de la Ilustración, con intelectuales y pensadores
        congregándose en cafés para discutir filosofía, política y ciencia. En
        la actualidad, el café sigue siendo una bebida apreciada en todo el
        mundo, con una variedad de métodos de preparación y estilos de consumo.
        Las cafeterías modernas han evolucionado para convertirse en lugares de
        encuentro social, negocios y creatividad. Además, la industria del café
        desempeña un papel crucial en la economía global, con millones de
        personas involucradas en su producción, comercialización y consumo.
        Desde su descubrimiento en la antigüedad hasta su impacto en la sociedad
        contemporánea, el café ha dejado una huella duradera en la cultura
        humana.
      </p>
      </div>
      <div className={style.tabla}>
      <table>
        <thead>
          <tr>
            <th scope="col">Docta Coffe</th>
          </tr>
        </thead>
        <tbody className={style.tablaBody}>
          <tr>
            <h3><HiTruck />Enviamos tu compra</h3>
          </tr>
          <tr>
            <h3><FaCreditCard />Paga como quieras</h3>
          </tr>
          <tr>
            <h3><MdOutlineSecurity />compra con seguridad</h3>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Home;
