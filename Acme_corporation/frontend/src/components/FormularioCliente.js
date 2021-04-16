import React, {Fragment, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/personas/'

const Formulario = () => {

  const [data, setData]=useState([]);
  const [persona, setPersonaSeleccionada]=useState({
    Nombres: '',
    Apellidos: '',
    Cedula: '',
    Telefono: '',
    Fecha: ''

  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setPersonaSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(persona);
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, persona)
    .then(response=>{
      setData(data.concat(response.data))
      alert("Cliente Creado")
    
    })
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
        <form className = "row"  >
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombres</span>
            <input type="text" className="form-control" onChange={handleChange} placeholder="Nombres" name="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellidos</span>
            <input type="text" className="form-control" onChange={handleChange} placeholder="Apellidos" name="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={handleChange} placeholder="Cedula" name="Cedula" aria-label="Cedula"></input>
            <span className="input-group-text">#</span>
            <input type="tel" className="form-control" onChange={handleChange} placeholder="Telefono" name="Telefono" aria-label="Telefono"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Fecha</span>
            <input type="date" className="form-control" onChange={handleChange} name="Fecha" placeholder="Fecha" aria-label="Fecha"></input>
          </div>
          <div className="input-group mb-3">
            <button type="submit" className="btn btn-primary" onClick={()=>peticionPost()}>Guardar</button>
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
