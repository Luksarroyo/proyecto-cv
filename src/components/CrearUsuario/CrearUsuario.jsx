import React from "react";
import style from "./CrearUsuario.module.css";
import { useState } from "react";

// cambiamos el nombre a crear usuario ya que tiene mas sentido utilizar el verbo "crear" que en vez de solo utilizar "Usuario"
const CrearUsuario = () => {
  const [user, setUser] = useState({
    crearUsuario: "",
    contraseña: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const envioFormulario = (evento) => {
    evento.preventDefeult();

    console.log(user);
  };
  return (
    <>
      <h1 className={style.titulo}>Crear usuario</h1>
      <form className={style.formulario} onSubmit={envioFormulario}>
        <input
          type="text"
          placeholder="Ingrese su  usuario"
          name="crearUsuario"
          value={user.crearUsuario}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Ingrese su  contraseña"
          name="contraseña"
          value={user.contraseña}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="ingrese su email"
          name="contraseña"
          value={user.email}
          onChange={handleChange}
        />

        <button type="submit">Crear usuario</button>
      </form>
    </>
  );
};

export default CrearUsuario;
