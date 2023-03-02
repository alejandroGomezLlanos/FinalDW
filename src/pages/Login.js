import { useState } from "react";
import "../styles.css";

import BotonLogin from "../componentes/BotonLogin";

export default function Login() {
  const [correo2, setcorreo] = useState("correo");
  const correo = "correo";
  const contraseña = "contraseña";

  return (
    <>
      <div className="col-6 bg-light mx-auto text-center">
        <h1>Pagina de login</h1>
        <a href="url">¿No tienes una cuenta? Crear cuenta</a>
        <hr></hr>
        <input type="text" placeholder="correo electronico" />
        <hr></hr>
        <input type="text" placeholder="contraseña" />
        <hr></hr>
        <a href="url">Olvide mi contraseña</a>
        <hr></hr>
        <BotonLogin botonLogin />
      </div>
      <div>
        <img src="./uao.png" width={500} alt="MDN"></img>
      </div>
    </>
  );
}
