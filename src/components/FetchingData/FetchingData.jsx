import { useEffect, useState } from "react"



const FetchingData = () => {
 
 const [post , setPost] = useState ([])
    useEffect(() =>{

    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
    obtenerPost
    .then(res => res.json())
    .then ((res) => setPost(res))
  },[]);

  console.log(post)
  // creo una funcion llamada nuevoPost para crear un usuario nuevo al hacer click
  const nuevoPost = () =>{
  // creo una const crearPost que va a manejar la promesa del fetch y va a dejar que haga console log,
  // solo por eso creo la const crearPost
    const crearPost = fetch ("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {},
    // como necesito que la info se envie como string, utilizo JSON.stringify
    body: JSON.stringify ( {
        userID: 7,
        title: "Estoy creando un post",
        body: "con post envio info desde el front",
    }),
   })
   crearPost.then(res => res.json()).then(res => console.log(res))
  };
  // creo una funcion para poder modificar los datos del usuario
  const editarUsuario = () => {
    // al usar el fetch debo detallar en la url, que usuario quiero modificar en este caso es /2
    fetch("https://jsonplaceholder.typicode.com/posts/2",{
      method: "PATCH",
      body: JSON.stringify({
        title: "Lucas"
      })

    })
  }
   return (
    <div>
        <h1>peticiones</h1>
{/* con el boton onclick llamo la funcion nuevo post para que se ejecute la creacion del nuevo usuario */}
        <button onClick={nuevoPost}>crear producto</button>
        {/* creo boton que al usarlo,creo el nuevo usuario, debe terner el nombre d e la funcion
        editar usuario */}
        <button onClick={editarUsuario}>editar producto</button>
    </div>
  )
}


export default FetchingData