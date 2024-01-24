import { useState, useEffect  } from 'react'
import {ItemDetail} from './ItemDetail'
import {items} from '../../ItemsMock'


 export const ItemDetailContainer = () => {

    // creo un useState donde voy a guardar la info que traiga sobre itemsmock
    const [product, setProduct] = useState ({})
    // en un primer momento creo una variable que va a solicitar el id que yo pido
    let id = 1

    useEffect (() => {
        // usando metodo find, voy a traer el primer elemento del arreglo que coincida con id 3
        let encontrado = items.find ( prod => prod.id === id)
        setProduct(encontrado)
    },[id])

    // console.log(product) ,por buena practica chequeo que llegue bien la info
  return (
    <div>
    <ItemDetail product={product}/>
    </div>
  )
}

