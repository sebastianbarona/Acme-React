import React, {Fragment, useState} from 'react';

const Formulario = () => {
   
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
      
<Fragment>
 
<div className="content_box">
  <div className="content_box_inner">
    <div className="row justify-content-center">
      <div className="grid-item branding  col-lg-5">
        <br></br>
        <br></br>
        <br></br>
        <br></br>       
        <h1>Agregar Cliente</h1>
        <form className = "row"  onSubmit={enviarDatos} >'csrf_token'
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
 
export default Formulario;
