import { useState, useEffect } from "react";
import Productos from "./Productos";
import { items } from "../../ItemsMock";
import style from "./Productos.module.css"
import { useParams } from "react-router-dom";


const ProductosContainer = () => {
  const {categoriaNombre} = useParams ()
  console.log(categoriaNombre);

  const [lista, setLista] = useState([]);

  useEffect(() => {

    const categoriaFiltrada = items.filter (prod=> prod.categoria === categoriaNombre)

    const tarea = new Promise((resolve, reject) => {
     resolve(categoriaNombre ? categoriaFiltrada : items);
      
    });

    tarea
    .then((res) => setLista(res)) 
    .catch((error) => console.log(error));

  },[categoriaNombre])

  return (
    <div className={style.container}>
      <Productos lista={lista} />
    </div>
   );
};
export default ProductosContainer;
