import React from 'react';
import EditIntermediario from './EditIntermediario'

const ModVenta = () => {

    const [equipo,setEquipo] = React.useState([])

    React.useEffect(() => {
      obtenerDatos()
            },[])
    
    const obtenerDatos = async() =>{
      const data = await fetch('http://127.0.0.1:8000/intermediarios')
      const intermediario = await data.json()
      setEquipo(intermediario.data)
  
    }    

    return (

<div className="col-md-6 col-7 content_section"> 
    <div> 
        <h3> Modificar Intermediario </h3>
        <p> Bienvenido a Acme Corporation recuerde llenar muy bien los campos antes de Modificar un Intermediario </p>
        <br></br>
    </div>
    <div className="row justify-content-center">
        <div className="mt75 row justify-content-center">                                      
            <div className="grid-item branding col-sm-3 col-md-3 col-lg-3">      
                
            {
                equipo.length > 0 ?    
                equipo.map(intermediario => (
    
                <div className="card ">
                    <div className="card-body">    
                        <h5 className="card-title"><strong>{ intermediario.Id_intermediario }</strong></h5>
                        <p className="card-text"><strong>{ intermediario.Intermediario }</strong></p>
                        <p className="card-text"><strong>Placa :</strong><strong >{ intermediario.Placa }</strong> </p>
                        <p className="card-text"><strong>Comprador:</strong><strong >{ intermediario.Comprador }</strong></p>
                        <p className="card-text"><strong>Fecha :</strong> <strong >{ intermediario.Fecha }</strong></p>
                        <p className="card-text"><strong>Precio :</strong> <strong >{ intermediario.Precio }</strong></p>
                        <center>
                            <button type="submit" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" >Edit</button>
                            <br></br>
                            <form action="/eliminarcarro/{{i.pk}}" >
                                <button type="submit" className="btn btn-primary" >Eliminar</button>
                            </form>
                        </center>
                    </div>
                    <EditIntermediario/>
                </div>

                )):(
                    <div >
                    <center>  
                        <label colSpan={3}>No Hay Transacciones Intermediadas</label>
                    </center>
                    </div>
                        )}
    
            </div>
            <br></br>                            
        </div>
    </div>
</div> 
                      
);
}
 

export default ModVenta;

