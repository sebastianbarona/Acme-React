import React, {Fragment, useState} from 'react';

import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/usuarios/'

const FormularioUsu = () => {

  const [data, setData]=useState([]);
  const [usuario, setUsuarioSeleccioando] = useState({

      Username:'',
      Email:'',
      Nombres: '',
      Apellidos: '',
      Imagen_Perfil:'',
      Password: '',
      Password2: '',
      Usuario_activo:  Boolean("True"),
      Fecha:'',
      Rol_usuario:''

  }) 

  
  const handleChange=e=>{
    const {name, value}=e.target;
    setUsuarioSeleccioando(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(usuario);
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, usuario)
    .then(response=>{
      setData(data.concat(response.data))
      alert("Usuario Creado")
    })
  }

  return (
        
<Fragment>

<div className="content_box">
  <div className="content_box_inner">
    <div class="row justify-content-center">
      <div class="grid-item branding  col-lg-5">  
      <br></br>   
      <br></br>   
     
        <h1>Agregar Usuario</h1>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Username</span>
                <input type="text" className="form-control" onChange={handleChange} name="Username" placeholder="Username" ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input type="email" className="form-control" onChange={handleChange} name="Email" placeholder="Email"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombres</span>
            <input type="text" className="form-control" onChange={handleChange} name="Nombres" placeholder="Nombres" ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellidos</span>
            <input type="text" className="form-control" onChange={handleChange} name="Apellidos" placeholder="Apellidos"></input>
          </div>
          <label for="basic-url" className="text-light" >Imagen de perfil URL</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">https://example/users/imagen_perfil</span>
                </div>
                <input type="text" className="form-control" onChange={handleChange} name="Imagen_Perfil" id="basic-url"></input>
            </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" onChange={handleChange} name="Password" placeholder="Password" ></input>
            <span className="input-group-text"></span>
            <input type="password" className="form-control" onChange={handleChange} name="Password2" placeholder="Confirm Password" ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Fecha</span>
            <input type="date" className="form-control" onChange={handleChange} name="Fecha" placeholder="Fecha" aria-label="Fecha"></input>
          </div>

          <div class="form-check">
             <input class="form-check-input" type="checkbox" onChange={handleChange}  name="Usuario_activo" id="flexCheckDefault"></input>
             <label class="form-check-label" for="flexCheckDefault">
                Usuario Activo
              </label>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Rol Options</label>
            </div>
            <select className="custom-select" onChange={handleChange} name="Rol_usuario" id="inputGroupSelect01">
                <option selected>Rol...</option>
                <option placeholder="Admin" value="Admin">Admin</option>
                <option placeholder="Empleado" value="Empleado">Empleado</option>
            </select>
          </div>

          <div className="input-group mb-3">
           <button type="submit" className="btn btn-primary" onClick={()=>peticionPost()}>Guardar</button>
          </div>

        </div>  
              </div>
              </div>
              </div>
 
        </Fragment>


    );
}
 
export default FormularioUsu;
