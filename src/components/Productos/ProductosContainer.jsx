import { useState, useEffect } from "react";
import Productos from "./Productos";
import { items } from "../../ItemsMock";
import style from "./Productos.module.css"

const ProductosContainer = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(items);
    });

    tarea
    .then((res) => setLista(res)) 
    .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Productos lista={lista} />
    </div>
  );
};

export default ProductosContainer;
