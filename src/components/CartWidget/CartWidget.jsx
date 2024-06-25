import {FaOpencart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {


  const {totalCantidad} = useContext (CartContext)

  let total = totalCantidad()
  return (
    <Link to="/cart">
    <div><FaOpencart size={30} /></div>
    <div>
      <span>{total}</span>
    </div>
    </Link>   
  )
}


export default CartWidget