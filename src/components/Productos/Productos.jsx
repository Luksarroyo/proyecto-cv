import style from "./Productos.module.css";
import { Link } from "react-router-dom";

const Productos = ({ lista }) => {
  return lista.map((elemento) => {
    return (
      <div key={elemento.id} className={style.container}>
        <div className={style.cardContainer}>
          <img className={style.cardImg} src={elemento.img} alt="" />
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
