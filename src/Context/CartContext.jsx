import { createContext, useState } from "react";

export const CartContext = createContext();
// aca lo que hago es agregar productos al carrito, pero por cada agregada que hago se suma todo el producto
// y lo correcto es que si ya tengo un prod solo se agregue la cantidad

//   const [cart, setCart] = useState([]);

//   const agregarAlCarrito = (product) => {
//     setCart([...cart, product]);
//   };

const CartContextProvider = ({ children }) => {
  // aca solo voy a agregar la cantidad si ya tengo el producto en el carrito,usando logica de agregarCantidad
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    let existe = agregarCantidad(product.id); // product: producto que quiero agregar
    // usando la logica de agregar al carrito si existe existe
    if (existe) {
      // creo newcart por que va a ser la nueva info con la cantidad midificada, mapeo cart
      let newCart = cart.map((elemento) => {
        // elemento es el producto que ya tengo en el carrito
        // si el id del elemento que ya tengo en el carrito es igual al id del producto que quiero agregar
        if (elemento.id === product.id) {
          // quiero q me retorne el elemento que ya tenia,solo sumandole la cantidad del producto a agregar
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          // si el elemento no existe en el carrito lo agrego como una tarjeta nueva
          return elemento;
        }
      });
      setCart(newCart);
      // usando la logica de agregar al carrito si existe  no existe
    } else {
      setCart([...cart, product]);
    }
  };

  const totalPrecio = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.quantity;
    }, 0);
    return total;
  };
  const totalCantidad = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const clearCart = () => {
    // con esta const limpio todo todo el carrito
    setCart([]);
  };

  // a dif de clear cart aca solo elimino un producto de los gregados y no todos,uso metodo filter
  const deleteProductoById = (id) => {
    // console.log("el id es :",id)
    const productosfiltrados = cart.filter((elemento) => elemento.id !== id);
    // creo una const, filtro el cart y le digo que guarde los elementos que no sean igual al id del prod
    // que estoy apretando el boton eliminar
    setCart(productosfiltrados);
    // luego edito set cart con la nueva info de productos filtrados
  };

  // en esta const uso metodo some el cual me devuelve un booleano,
  // entonces en base al id, existe recorre cart y si el elemento.id es identico a id me devuelve true
  // con esto evito agregar dos veces la misma tarjeta del mismo producto
  const agregarCantidad = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    deleteProductoById,
    totalPrecio,
    totalCantidad,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
