import React, {Fragment, useState} from 'react';

const FormularioUsu = () => {

  const [datos, setDatos] = useState({

      Username:'',
      Email:'',
      Nombres: '',
      Apellidos: '',
      Imagen_Perfil:'',
      Password: '',
      Password2: '',
      Usuario_activo: '',
      Fecha:'',
      Rol_usuario:''

  }) 
  
  const listener = (event) => {
     setDatos({
       ...datos,
       [event.target.name] : event.target.value
     })
  }

  const enviarDatos = (event) => {

    event.preventDefault();
    console.log(datos.Username+' '+datos.Email+' '+datos.Nombres+' '+datos.Apellidos+' '+datos.Imagen_Perfil+' '+datos.Password+' '+datos.Password2
    +' '+datos.Usuario_activo+' '+datos.Fecha+' '+datos.Rol_usuario)

  }

  return (
        
<Fragment>

<div className="content_box">
  <div className="content_box_inner">
    <div class="row justify-content-center">
      <div class="grid-item branding  col-lg-5">     
        <h1>Agregar Usuario</h1>
        <form className = "row" onSubmit={enviarDatos}>'csrf_token'
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Username</span>
                <input type="text" className="form-control" onChange={listener} name="Username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input type="email" className="form-control" onChange={listener} name="Email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombres</span>
            <input type="text" className="form-control" onChange={listener} name="Nombres" placeholder="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellidos</span>
            <input type="text" className="form-control" onChange={listener} name="Apellidos" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1"></input>
          </div>
          <label for="basic-url" className="text-light" >Imagen de perfil URL</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">https://example/users/imagen_perfil</span>
                </div>
                <input type="text" className="form-control" onChange={listener} name="Imagen_Perfil" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" onChange={listener} name="Password" placeholder="Password" aria-label="Password"></input>
            <span className="input-group-text"></span>
            <input type="password" className="form-control" onChange={listener} name="Password2" placeholder="Confirm Password" aria-label="Password2"></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Fecha</span>
            <input type="date" className="form-control" onChange={listener} name="Fecha" placeholder="Fecha" aria-label="Fecha"></input>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Rol Options</label>
            </div>
            <select className="custom-select" onChange={listener} name="Rol_usuario" id="inputGroupSelect01">
                <option selected>Rol...</option>
                <option value="1">Admin</option>
                <option value="2">Empleado</option>
            </select>
          </div>

          <div className="input-group mb-3">
           <button type="submit" className="btn btn-primary">Guardar</button>
          </div>
        </form>

        </div>  
              </div>
              </div>
              </div>
 
        </Fragment>


    );
}
 
export default FormularioUsu;
