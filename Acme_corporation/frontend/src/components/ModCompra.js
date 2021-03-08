import React from 'react';
import EditCompra from './EditCompra'

const ModCompra = () => {

    const [equipo,setEquipo] = React.useState([])

    React.useEffect(() => {
      obtenerDatos()
            },[])
    
    const obtenerDatos = async() =>{
      const data = await fetch('http://127.0.0.1:8000/intermediarios')
      const compra = await data.json()
      setEquipo(compra.data)
  
    }    

    return (

<div className="col-md-6 col-7 content_section">
    <div> 
        <h3> Modificar Compra </h3>
        <p> Bienvenido a Acme Corporation recuerde llenar muy bien los campos antes de Modificar una Compra </p>
        <br></br>
    </div>
    <div className="row justify-content-center">
        <div className="mt75 row justify-content-center">                                      
            <div className="grid-item branding col-sm-3 col-md-3 col-lg-3"> 
            {
                       equipo.length > 0 ?    
                        equipo.map(compra => (
                        <div key={compra.pk}>

                <div className="card ">
                    <div className="card-body">    
                        <h5 className="card-title"><strong>{compra.Id_compra} </strong></h5>
                        <p className="card-text"><strong>{compra.Placa} </strong></p>
                        <p className="card-text"><strong>Vendedor :</strong><strong >{compra.Vendedor} </strong> </p>
                        <p className="card-text"><strong>Comprador:</strong><strong >{compra.Comprador} </strong></p>
                        <p className="card-text"><strong>Fecha :</strong> <strong >{compra.Fecha} </strong></p>
                        <p className="card-text"><strong>Precio :</strong> <strong >{compra.Precio} </strong></p>
                        <center>

                            <button type="submit" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" >Edit</button>
                            <br></br>
                            <form action="/eliminarcarro/{{i.pk}}" >
                                <button type="submit" className="btn btn-primary" >Eliminar</button>
                            </form>
                        </center>
                    </div>
                    <EditCompra/>
                </div>

                </div>

                )):(
            <div >
            <center>  
                <label colSpan={3}>No Hay Compras</label>
            </center>
            </div>
                )
                }

            </div>
            <br></br>                            
        </div>
    </div>
</div> 
                      

);
}
 

export default ModCompra;

