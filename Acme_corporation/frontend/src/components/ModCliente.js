import React from 'react';
import EditCliente from './EditCliente'

const ModCliente = () => {

    const [equipo,setEquipo] = React.useState([])

    React.useEffect(() => {
      obtenerDatos()
            },[])
    
    const obtenerDatos = async() =>{
      const data = await fetch('http://127.0.0.1:8000/personas')
      const personas = await data.json()
      setEquipo(personas.data)
  
    }    

    return ( 

<div className="col-md-6 col-7 content_section">
    <div> 
        <h3> Modificar Cliente </h3>
        <p> Bienvenido a Cacharrerias Don Andres recuerde llenar muy bien los campos antes de Modificar un Cliente </p>
        <br></br>
    </div>
    <div className="row justify-content-center">
        <div className="mt75 row justify-content-center">                                      
            <div className="grid-item branding col-sm-3 col-md-3 col-lg-3">

                <div className="card ">
                    <div className="card-body">    
                        <h5 className="card-title"><strong>persona.Cedula </strong></h5>
                        <p className="card-text"><strong>persona.Nombres </strong></p>
                        <p className="card-text"><strong>Apellidos: </strong><strong >persona.Apellidos </strong> </p>
                        <p className="card-text"><strong>Telefono: </strong><strong >persona.Telefono </strong></p>
                        <p className="card-text"><strong>Fecha: </strong> <strong >persona.Fecha </strong></p>
                        <center>
                            <button type="submit" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" >Edit</button>
                            <br></br>
                            <form action="/eliminarcarro/{{i.pk}}" >
                                <button type="submit" className="btn btn-primary" >Eliminar</button>
                            </form>
                        </center>
                    </div>
                    <EditCliente/>
                </div>

                <br></br>                            
            </div>
        </div>
    </div>       
</div>
            

);
}
 

export default ModCliente;

