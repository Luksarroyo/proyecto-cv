import { useState, useEffect } from "react";
import Productos from "./Productos";
import style from "./Productos.module.css"
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
// con el siguiente import consigo la info desde la pag de firebase
import { getDocs, collection,query,where } from "firebase/firestore";
// bd= base de datos // getdocs y coollecion= info general de la bd // query y where ayuda a filtrar bd


const ProductosContainer = () => {
  const {categoriaNombre} = useParams ()
  console.log(categoriaNombre);

  const [lista, setLista] = useState([]);

// con el siguiente codigo traigo los productos filtrados por categoria
  useEffect(() => {                
// collection recibe dos parametros (base de datos de donde obtengo la info,coleccion a usar de esa bd)
// la const itemCollection va a tener todos los datos de BD
 const itemCollection = collection(db, "items")

// y q va a tener la info de datos filtrados aplicando el metodo where
 const q = query (itemCollection, where("categoria","==",categoriaNombre))
 getDocs(q) 
//   collections nos devuelve una promesa y yo la manipulo con then y catch
.then((res)=>{
// como firebase no devuelve dentro de los datos del item el id, debo sumar el id a la info que tengo de items
// creo una const items, recorro con el metodo maps la info de itms y retorno  la data que tiene items.data y le agrego el id
  const items = res.docs.map (item =>{
    return{
      ...item.data (),
      id: item.id
    }
  })

  setLista (items)
})
.catch((err)=>console.log(err))

  },[categoriaNombre]);

  
  

  return (
    <div className={style.container}>
      <Productos lista={lista} />
    </div>
   );
};
export default ProductosContainer;



// este manejo de promesa lo hacia por que no tenia una base de datos en el back y tenia un archivo dentro de este proyecto
// useEffect(() => {


//   const categoriaFiltrada = items.filter (prod=> prod.categoria === categoriaNombre)

//   const tarea = new Promise((resolve, reject) => {
//   resolve(categoriaNombre ? categoriaFiltrada : items);
    
//   });

//   tarea
//   .then((res) => setLista(res)) 
//   .catch((error) => console.log(error));

// },[categoriaNombre]);

// -------------------------------------------------------------------------------------------------------------------------------------
// con el siguiente codigo, logro traer todos los productos desde el back (firebase)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { db } from "../../firebaseConfig";
// // con el siguiente import consigo la info desde la pag de firebase
// import { getDocs, collection } from "firebase/firestore";
// // bd= base de datos
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// useEffect(() => {
//   // collection recibe dos parametros (base de datos de donde obtengo la info,coleccion a usar de esa bd)
//    const itemCollection = collection(db, "items")
//    getDocs(itemCollection) 
//   //  nos devuelve una promesa y yo la manipulo con then y catch
//   .then((res)=>{
//   // como firebase no devuelve dentro de los datos del item el id, debo sumar el id a la info que tengo de items
//   // creo una const items, recorro con el metodo maps la info de itms y retorno  la data que tiene items.data y le agrego el id
//     const items = res.docs.map (item =>{
//       return{
//         ...item.data (),
//         id: item.id
//       }
//     })
  
//     setLista (items)
//   })
//   .catch((err)=>console.log(err))
  
//     },[categoriaNombre]);
// ----------------------------------------------------------------------------------------------------
 // INFO EXTRA:si quisiera tener una vista con todos los productos y otra con productos filtrados
// deberia hacer el siguiente codigo
// useEffect(() => {  
// let productosVenta;
// if(categoriaNombre){
//   const q = query (itemCollection, where("categoria","==",categoriaNombre))
//   productosVenta = q
// }else{
//   const itemCollection = collection(db, "items")
//   productosVenta= itemCollection
// }