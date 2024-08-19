import React from "react";
import { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    usuario: "",
    contraseña: "",
  });
  console.log(userData);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const envioFormulario = (evento) => {
    evento.preventDefeult();
  };
  return (
    <div>
      <h1 className={style.titulo}>Ingresar usuario</h1>
      <form className={style.formulario} onSubmit={envioFormulario}>
        <input
          type="text"
          placeholder="ingrese su usuario"
          name="usuario"
          value={userData.usuario}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="ingrese su contraseña"
          name="contraseña"
          value={userData.contraseña}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
        <Link to="/crearUsuario">
          <button type="button">Crear usuario</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
