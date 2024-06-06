import { useState, useEffect } from "react";
import Productos from "./Productos";
<<<<<<< HEAD
import axios from "axios";
import style from "./Productos.module.css";
=======
import { items } from "../../ItemsMock";
import style from "./Productos.module.css"
import { useParams } from "react-router-dom";

>>>>>>> Eventos

const ProductosContainer = () => {
  const {categoriaNombre} = useParams ()
  console.log(categoriaNombre);

  const [lista, setLista] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [modificado, setModificado] = useState(false);
  const [crear, setCrear] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    setIsDelete(false);
    setModificado(false);
    setCrear(false);

    let data = axios.get("http://localhost:5000/product");

    data.then((res) => setLista(res.data));
  }, [isDelete, modificado, crear]);

  const deleteProductos = (id) => {
    axios.delete(`http://localhost:5000/product/${id}`);

    setIsDelete(true);
  };

  // para modificar un producto,debo colocarle en el parametro de la funcion el id y los datos a cambiar
  const modificarProdcutos = (id, data) => {
    // ademas del id en el endpoint coloco la propiedad data y axios hace todo automatico
    axios.patch(`http://localhost:5000/product/${id}`, data);
    setModificado(true);
  };
  // para crear un producto en el parametro de la funcion debo colocar los datos que voy a agragar
  // al nuevo producto. Id no hace falta por q lo crea por defecto axios
  const crearProductos = (data) => {
    axios.post("http://localhost:5000/product",data);
    setCrear(true);
  };

  return (
    <div>
      <Productos
        lista={lista}
        deleteProductos={deleteProductos}
        modificarProdcutos={modificarProdcutos}
      />

      <button
        className={style.button}
        onClick={() => crearProductos({
        titulo: "Cafe blend",
        precio: 123,
        stock: 12,
        descripcion: "cafe 250gr",
        categoria: "cafe",})}
      >
        crear producto
      </button>
=======


    const categoriaFiltrada = items.filter (prod=> prod.categoria === categoriaNombre)

    const tarea = new Promise((resolve, reject) => {
    resolve(categoriaNombre ? categoriaFiltrada : items);
      
    });

    tarea
    .then((res) => setLista(res)) 
    .catch((error) => console.log(error));

  },[categoriaNombre]);

  return (
    <div className={style.container}>
      <Productos lista={lista} />
>>>>>>> Eventos
    </div>
   );
};
export default ProductosContainer;
