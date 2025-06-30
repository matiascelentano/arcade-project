import { useState } from "react";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";



const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    console.log(email);

    const pw = e.target.password.value;

    login(userEmail, pw)
      .then(u => {
        navigate("/");
      })
      .catch(e => {
        setError("Hubo un error al iniciar la sesion")
      })

  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Inicio de Sesion</h1>
        {
          error && <p className="text-danger">{error}</p>
        }
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" className="form-control" aria-describedby="emailHelp" />
          <div id="emailHelp">Ingrese su email</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" className="form-control" aria-describedby="passwordHelp" />
          <div id="passwordHelp">Ingrese su contraseña</div>
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </>
  )
}

export default Login