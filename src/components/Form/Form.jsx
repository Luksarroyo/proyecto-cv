import React from "react";
import { useState } from "react";
import style from "./Form.module.css";
import {Link} from "react-router-dom"

const Form = () => {
  // aca va la logica que la aplico en el container
  // para evitar tener 12 useState creo uno generico para ser usado en todos lados
  // useState no va a recibir un string en este caso, sino que un objeto y dentro del objeto voy a manejar un string
  const [userData, setUserData] = useState({
    usuario: "",
    contraseña: ""
  });
  console.log(userData);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // ...userData es el spread operator va a hacer que se guarde toda la info nueva de userdata sin que desaparezca la info anterior
    // e.target.name le digo a userdata que segun el name del input sea la info que traiga ejemplo name="usuario", name="contraseña"
    // tenemos que tener en cuenta q target.name va a ser un string y no podemos usar string como propiedad de un obj
    // por eso vamos a poner [e.target.name] entre corchetes
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
          // en value como que ingreso en usardata y de ahi utilizo el usuario en este caso
          value={userData.usuario}
          // onChange={ (e)=>{ setUsuario(e.target.value)} anteriormente manejaba el evento y traia de value un string con la info escrita
          // pero no debemos olvidar  que el useState de arriba me va a devovler un objeto por lo cual no es compatible una cosa con otra
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
        <Link  to="/login/crearUsuario" className= {style.list}>
        <button type="button">Crear usuario</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
