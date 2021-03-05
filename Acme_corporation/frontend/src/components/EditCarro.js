import React, {useState} from 'react';

const EditCarro = () => {

  const [datos,setUsuarioseleccionado] = useState({

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
    //   setsUsuarioseleccionado(elemento):
    

  }

  const listener = (event) => {
    setUsuarioseleccionado({
      ...datos,
      [event.target.name] : event.target.value
    })
 }


    return ( 

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Actualizar Carro</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Marca</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Marca" id="inputGroupSelect01">
                            <option selected>Marca...</option>
                            <option value="1">Marca1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Modelo</span>
                        <input type="text" className="form-control" onChange={listener} placeholder="Modelo" name="Modelo" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Placa</span>
                        <input type="text" className="form-control" onChange={listener} placeholder="Placa" name="Placa" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Dueño</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Dueño" id="inputGroupSelect01">
                            <option selected>Dueño...</option>
                            <option value="1">Persona1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Fecha Publicacion</span>
                        <input type="date" className="form-control" onChange={listener} name="Fechapublicacion" placeholder="Fechapublicacion" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Precio</span>
                        <input type="number" className="form-control" onChange={listener} name="Precio" placeholder="Precio" ></input>
                    </div>
                    <label for="basic-url" className="text-light" >Imagen Carro URL</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">https://example/imagen_Carro</span>
                        </div>
                        <input type="text" className="form-control" onChange={listener} name="Imagen" id="basic-url" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Estado Carro</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Estado_Carro" id="inputGroupSelect01">
                            <option selected>Estado Carro...</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Estado</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Estado" id="inputGroupSelect01">
                            <option selected>Estado...</option>
                            <option value="Disponible">Disponible</option>
                            <option value="Vendido">Vendido</option>
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
 
export default EditCarro;