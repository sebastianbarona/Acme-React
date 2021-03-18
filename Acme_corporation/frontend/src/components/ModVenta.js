import React from 'react';
import EditVenta from './EditVenta'

const ModVenta = () => {

    const [equipo,setEquipo] = React.useState([])

    React.useEffect(() => {
      obtenerDatos()
            },[])
    
    const obtenerDatos = async() =>{
      const data = await fetch('http://127.0.0.1:8000/ventas')
      const ventas = await data.json()
      setEquipo(ventas.data)
  
    }
  
    console.log(equipo)
  
    return ( 

<div className="col-md-6 col-7 content_section">
    <div> 
        <h3> Modificar Venta </h3>
        <p> Bienvenido a Cacharrerias Don Andres recuerde llenar muy bien los campos antes de Modificar una Venta </p>
        <br></br>
    </div>
    <div className="row justify-content-center">
        <div className="mt75 row justify-content-center">                                      
            <div className="grid-item branding col-sm-3 col-md-3 col-lg-3"> 
            {
                       equipo.length > 0 ?    
                        equipo.map(venta => (
                        <div key={venta.pk}>

                <div className="card ">
                    <div className="card-body">    
                        <h5 className="card-title"><strong>{venta.Id_venta} </strong></h5>
                        <p className="card-text"><strong>{venta.Placa} </strong></p>
                        <p className="card-text"><strong>Empleado :</strong><strong >{venta.Vendedor} </strong> </p>
                        <p className="card-text"><strong>Cliente:</strong><strong >{venta.Comprador} </strong></p>
                        <p className="card-text"><strong>Fecha :</strong> <strong >{venta.Fecha} </strong></p>
                        <p className="card-text"><strong>Precio :</strong> <strong >{venta.Precio} </strong></p>
                        <center>
                            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Edit</button>
                            <br></br>
                              <form action="/eliminarcarro/{{i.pk}}" >
                                <button type="submit" className="btn btn-primary" >Eliminar</button>
                            </form>
                        </center>
                    </div>
                    <EditVenta/>
                </div>                    

                </div>
                    )):(
                <div >
                <center>  
                    <label colSpan={3}>No Hay Ventas</label>
                </center>
                </div>
                    )
                    }
            </div>
        </div>
    </div>       
</div>

);
}
 

export default ModVenta;

