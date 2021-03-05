import React, {useState} from 'react';

const EditUsuario = () => {
 
  //const [modalEditar,]

  const [datos,Usuarioseleccionado] = useState({

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

  const seleccionadoUsuario = (elemento,caso)=>{
    //   setsUsuarioseleccionado(elemento); (caso === 'Editar)&&setModalEditar(true)}
    

  }

  const listener = (event) => {
    Usuarioseleccionado({
      ...datos,
      [event.target.name] : event.target.value
    })
 }

  return ( 

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Actualizar Usuario</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    <div className="modal-body">
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Username</span>
                <input type="text" className="form-control" onChange={listener} name="Username" placeholder="Username" value={Usuarioseleccionado.Username} ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input type="email" className="form-control" onChange={listener} name="Email" placeholder="Email" value={Usuarioseleccionado.Email} ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombres</span>
            <input type="text" className="form-control" onChange={listener} name="Nombres" placeholder="Nombres" value={Usuarioseleccionado.Nombres} ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellidos</span>
            <input type="text" className="form-control" onChange={listener} name="Apellidos" placeholder="Apellidos" value={Usuarioseleccionado.Apellidos}></input>
          </div>
          <label for="basic-url" className="text-light" >Imagen de perfil URL</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">https://example/imagen_perfil</span>
                </div>
                <input type="text" className="form-control" onChange={listener} name="Imagen_Perfil" id="basic-url" value={Usuarioseleccionado.Imagen_Perfil}></input>
            </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" onChange={listener} name="Password" placeholder="Password" value={Usuarioseleccionado.Password}></input>
            <span className="input-group-text"></span>
            <input type="password" className="form-control" onChange={listener} name="Password2" placeholder="Confirm Password" value={Usuarioseleccionado.Password2}></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Fecha</span>
            <input type="date" className="form-control" onChange={listener} name="Fecha" placeholder="Fecha" value={Usuarioseleccionado.Fecha}></input>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Rol Options</label>
            </div>
            <select className="custom-select" onChange={listener} name="Rol_usuario" id="inputGroupSelect01" value={Usuarioseleccionado.Rol_usuario}>
                <option selected>Rol...</option>
                <option value="1">Admin</option>
                <option value="2">Empleado</option>
            </select>
          </div>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      );
}
 
export default EditUsuario;