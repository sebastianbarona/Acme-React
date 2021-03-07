import React from 'react';
import EditCarro from './EditCarro'


const ModCarros = () => {

    const [equipo,setEquipo] = React.useState([])

    React.useEffect(() => {
      obtenerDatos()
            },[])
    
    const obtenerDatos = async() =>{
      const data = await fetch('http://127.0.0.1:8000/carros')
      const carros = await data.json()
      setEquipo(carros.data)
  
    }
  

    return ( 
<div className="col-md-6 col-7 content_section">
    <div> 
        <h3> Modificar Carro </h3>
        <p> Bienvenido a Cacharrerias Don Andres recuerde llenar muy bien los campos antes de Modificar un Carro </p>
        <br></br>
    </div>
    <div className="row justify-content-center">
        <div className="mt75 row justify-content-center">
            <div className="grid-item branding col-sm-3 col-md-3 col-lg-3"> 
                <div className="card ">

                    <img className="card-img-top" src="https://i.pinimg.com/564x/b3/a4/c1/b3a4c17c3d200b5318745fdb6b04e38e.jpg"></img>
                    <div className="card-body">    
                        <h5 className="card-title"><strong>carro.Marca</strong></h5>
                        <p className="card-text"><strong>Placa</strong><strong>carro.Placa </strong></p>
                        <p className="card-text"><strong>Dueño :</strong><strong >carro.Dueño </strong></p>
                        <p className="card-text"><strong>Fecha Publicacion :</strong> <strong >carro.Fecha_Publicacion </strong></p>
                        <p className="card-text"><strong>Estado :</strong><strong >carro.Estado </strong> </p>
                        <p className="card-text"><strong>Precio :</strong><strong >carro.Precio </strong> </p>
                        <center>
                        <button type="submit" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" >Edit</button>
                        <br></br>
                        <form action="/eliminarcarro/{{i.pk}}" >
                            <button type="submit" className="btn btn-primary" >Eliminar</button>
                        </form>
                        </center>
                    </div>
                     <EditCarro/>
                </div>
            </div>
        </div>
    </div>              
</div>
           
);
}
 

export default ModCarros;

