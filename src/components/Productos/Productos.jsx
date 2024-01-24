import style from "./Productos.module.css";

// aca coloco los nombres de las funciones que vienen de productos container.jsx para usar
// en los botones de editar y borrar
const Productos = ({ lista, deleteProductos, modificarProdcutos }) => {
  return lista.map((elemento) => {
    return (
      <div className={style.container}>
        <div className={style.cardContainer}>
          <img className={style.cardImg} src={elemento.img} alt="" />
          <h3>{elemento.titulo}</h3>
          <h2>${elemento.precio}</h2>
          <button className={style.button}>COMPRAR</button>
          <button
            className={style.button}
            onClick={() => modificarProdcutos(elemento.id, { precio:10})}
          >
            EDITAR
          </button>
          <button
            className={style.button}
            onClick={() => deleteProductos(elemento.id)}
          >
            BORRAR
          </button>
        </div>
      </div>
    );
  });
};

export default Productos;
