import style from "./Productos.module.css";
import { Link } from "react-router-dom";

const Productos = ({ lista }) => {
  return lista.map((elemento) => {
    return (
      <div className={style.cardContainer} key={elemento.id}>
        <div className={style.contenedorImg}>
          <img className={style.cardImg} src={elemento.img} alt="" />
        </div>
        <div className={style.contenedorInfo}>
          <h3>{elemento.titulo}</h3>
          <h2>${elemento.precio}</h2>
          <Link to={`/detalleProducto/${elemento.id}`}>
            <button className={style.button}>Ver detalle</button>
          </Link>
        </div>
      </div>
    );
  });
};
export default Productos;
