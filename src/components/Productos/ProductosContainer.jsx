import { useState, useEffect } from "react";
import Productos from "./Productos";
import style from "./Productos.module.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ProductosContainer = () => {
  const { categoriaNombre } = useParams();
  console.log(categoriaNombre);

  const [lista, setLista] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "items");

    const q = query(itemCollection, where("categoria", "==", categoriaNombre));
    getDocs(q)
      .then((res) => {
        const items = res.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        });

        setLista(items);
      })
      .catch((err) => console.log(err));
  }, [categoriaNombre]);

  return (
    <div className={style.grilla}>
      <Productos lista={lista} />
    </div>
  );
};
export default ProductosContainer;
