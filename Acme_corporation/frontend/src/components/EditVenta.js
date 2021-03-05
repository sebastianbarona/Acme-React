import React, {Fragment, useState} from 'react';

const EditVenta = () => {

  const [datos, setDatos] = useState({

    Placa: '',
    Vendedor: '',
    Comprador: '',
    Fecha:'',
    Precio:''
}) 

const listener = (event) => {
   setDatos({
     ...datos,
     [event.target.name] : event.target.value
   })
}

const enviarDatos = (event) => {

  event.preventDefault();
  console.log(datos.Placa+' '+datos.Vendedor+' '+datos.Comprador+' '+datos.Fecha+' '+datos.Precio)

}


    return ( 

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Actualizar Venta</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Placa</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Placa" id="inputGroupSelect01">
                            <option selected>Placa...</option>
                            <option value="Placa1">Placa1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Vendedor</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Vendedor" id="inputGroupSelect01">
                            <option selected>Empleados...</option>
                            <option value="Emp1">Emp1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Cliente</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Comprador" id="inputGroupSelect01">
                            <option selected>Cliente...</option>
                            <option value="Cliente1">Cliente1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Fecha</span>
                        <input type="date" className="form-control" onChange={listener} name="Fecha" placeholder="Fecha" aria-label="Fecha"></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Precio</span>
                        <input type="number" className="form-control" onChange={listener} name="Precio" placeholder="Precio" aria-label="Precio"></input>
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
 
export default EditVenta;