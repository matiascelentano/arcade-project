
const Login = () => {
  return (
    <form action="#">
      <h1>Inicio de Sesion</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Nombre de Usuario</label>
        <input type="text" name="username" id="username" className="form-control" aria-describedby="usernameHelp"/>
        <div id="usernameHelp" className="form-text">Ingrese su nombre de usuario</div>
      </div>
        <div className="mb-3">
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" className="form-control" aria-describedby="passwordHelp"/>
        <div id="passwordHelp" className="form-text">Ingrese su contraseña</div>
      </div>
      <button type="submit" className="btn btn-primary">Ingresar</button>
    </form>
  )
}

export default Login