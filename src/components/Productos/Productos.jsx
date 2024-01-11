import style from "./Productos.module.css"

const Productos =  ( {lista} ) => {
  return(
        lista.map((elemento) => {
          return (
            <div className={style.container}>
              <div className={style.cardContainer}>
                <img className={style.cardImg} src={elemento.img} alt="" />
                <h3>{elemento.titulo}</h3>
                <h2>${elemento.precio}</h2>
                <button className={style.button}>COMPRAR</button>
              </div>
            </div>
            );
          }
        )
      
  )
};

export default Productos