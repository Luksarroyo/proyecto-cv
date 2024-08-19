import { useEffect, useState } from "react";

const FetchingData = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
    obtenerPost.then((res) => res.json()).then((res) => setPost(res));
  }, []);

  console.log(post);

  const nuevoPost = () => {
    const crearPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {},

      body: JSON.stringify({
        userID: 7,
        title: "Estoy creando un post",
        body: "con post envio info desde el front",
      }),
    });
    crearPost.then((res) => res.json()).then((res) => console.log(res));
  };

  const editarUsuario = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: "PATCH",
      body: JSON.stringify({
        title: "Lucas",
      }),
    });
  };
  return (
    <div>
      <h1>peticiones</h1>
      {/* con el boton onclick llamo la funcion nuevo post para que se ejecute la creacion del nuevo usuario */}
      <button onClick={nuevoPost}>crear producto</button>
      {/* creo boton que al usarlo,creo el nuevo usuario, debe terner el nombre d e la funcion
        editar usuario */}
      <button onClick={editarUsuario}>editar producto</button>
    </div>
  );
};

export default FetchingData;
