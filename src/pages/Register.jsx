import './Register.css';

const Register = () => {
  return (
    <>
      <figure id="logoRegister">
        <img src="game-controller.png" alt="" className="img-fluid"/>
      </figure>
      <form>
        <div className="">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="email" className="form-control" id="name" placeholder="Ingrese su nombre" />
        </div>
        <div className="lastname">
          <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
          <input type="email" className="form-control" id="lastname" placeholder="Ingrese su apellido" />
        </div>
        <div className="">
          <label htmlFor="username" className="form-label">Nombre de Usuario</label>
          <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre de usuario" />
        </div>
        <div className="">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su Email" />
        </div>
        <div className="">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Default file input example</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button className="d-block mx-auto" id="buttonRegister">Crear Cuenta</button>
      </form>
    </>
  )
}

export default Register