import { useState, useEffect } from "react";
import Productos from "./Productos";
import axios from "axios";
import style from "./Productos.module.css";

const ProductosContainer = () => {
  const [lista, setLista] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [modificado, setModificado] = useState(false);
  const [crear, setCrear] = useState(false);

  useEffect(() => {
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
    </div>
  );
};

export default ProductosContainer;
