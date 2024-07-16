import {useState, useEffect  } from 'react'
import {ItemDetail} from './ItemDetail';

import { db } from '../../firebaseConfig'
import { getDoc, collection, doc} from "firebase/firestore";
//  getDoc: metodo para traer   un solo documento
// collection: accesdo a los productos a la venta
// doc: dentro del acceso de los prod a la venta, ingreso a una caracteristica especifica ej: id
 export const ItemDetailContainer = () => {

    const [product, setProduct] = useState ({})
   

    useEffect (() => {
      // const itemDetailCollection= accedo a los items de la base de datos de firebase
      const itemCollection = collection(db, "items")
      // const refDoc: usando el metodo doc, accedo al id de los items de itemdetailcollection
      const refDoc= doc(itemCollection, id);
      // usando metodo getDoc traigo el id obtenido en refDoc
      getDoc (refDoc)
      .then((res)=>
        setProduct({
        ...res.data(),
        id: res.id,
      })
    )
    .catch ((err)=>console.log (err));
    },[id])

    // console.log(product) ,por buena practica chequeo que llegue bien la info
  return (
    <div>
    <ItemDetail product={product}/>
    </div>
  )
}


// --------------------- codigo para ingresar a detalle del producto usando bd en el front (producmock)
// import { useState, useEffect  } from 'react'
// import {ItemDetail} from './ItemDetail'
// import {items} from '../../ItemsMock'


//  export const ItemDetailContainer = () => {

//     // creo un useState donde voy a guardar la info que traiga sobre itemsmock
// const [product, setProduct] = useState ({})
//     // en un primer momento creo una variable que va a solicitar el id que yo pido
//     let id = 1

//     useEffect (() => {
//         // usando metodo find, voy a traer el primer elemento del arreglo que coincida con id 3
//         let encontrado = items.find ( prod => prod.id === id)
//         setProduct(encontrado)
//     },[id])

//     // console.log(product) ,por buena practica chequeo que llegue bien la info
//   return (
//     <div>
//     <ItemDetail product={product}/>
//     </div>
//   )
// }