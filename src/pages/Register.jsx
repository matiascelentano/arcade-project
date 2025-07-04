import './Register.css';

const Register = () => {
  return (
    <>
      <form id='registerForm'>
        <figure id="logoRegister">
          <img src="game-controller.png" alt="" className="img-fluid" />
        </figure>
        <div className="mainText">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="email" className="form-control" id="name" placeholder="Ingrese su nombre" />
        </div>
        <div className="mainText">
          <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
          <input type="email" className="form-control" id="lastname" placeholder="Ingrese su apellido" />
        </div>
        <div className="mainText">
          <label htmlFor="username" className="form-label">Nombre de Usuario</label>
          <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre de usuario" />
        </div>
        <div className="mainText">
          <label htmlFor="exampleFormControlInput1" className="form-label">Correo Electronico</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su Email" />
        </div>
        <div className="mainText">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="mb-3 mainText">
          <label htmlFor="formFile" className="form-label">Subir Archivo</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button className="d-block mx-auto" id="buttonRegister">Crear Cuenta</button>
      </form>
    </>
  )
}

export default Register