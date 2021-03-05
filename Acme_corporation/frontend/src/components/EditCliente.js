import React, {useState} from 'react';


const EditCliente = () => {
 
  const [datos, setDatos] = useState({

    Nombres: '',
    Apellidos: '',
    Cedula: '',
    Telefono: '',
    Fecha: ''

}) 

const listener = (event) => {
   setDatos({
     ...datos,
     [event.target.name] : event.target.value
   })
}

const enviarDatos = (event) => {

  event.preventDefault();
  console.log(datos.Nombres+' '+datos.Apellidos+' '+datos.Cedula+' '+datos.Telefono+' '+datos.Fecha)

}


  return ( 

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Actualizar Cliente</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombres</span>
            <input type="text" className="form-control" onChange={listener} placeholder="Nombres" name="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellidos</span>
            <input type="text" className="form-control" onChange={listener} placeholder="Apellidos" name="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={listener} placeholder="Cedula" name="Cedula" aria-label="Cedula"></input>
            <span className="input-group-text">#</span>
            <input type="tel" className="form-control" onChange={listener} placeholder="Telefono" name="Telefono" aria-label="Telefono"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Fecha</span>
            <input type="date" className="form-control" onChange={listener} name="Fecha" placeholder="Fecha" aria-label="Fecha"></input>
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
 
export default EditCliente;