import React from 'react';
import EditUsuario from './EditUsuario'


const ModUsuario = () => {

    const [equipo,setEquipo] = React.useState([])

    React.useEffect(() => {
      obtenerDatos()
            },[])
    
    const obtenerDatos = async() =>{
      const data = await fetch('http://127.0.0.1:8000/usuarios')
      const usuarios = await data.json()
      setEquipo(usuarios.data)
  
    }    

    return ( 

<div className="col-md-6 col-7 content_section"> 
    <div> 
        <h3> Modificar Usuario </h3>
        <p> Bienvenido a Cacharrerias Don Andres recuerde llenar muy bien los campos antes de Modificar un Usuario </p>
        <br></br>
    </div>
    <div className="row justify-content-center">
        <div className="mt75 row justify-content-center">                                      
            <div className="grid-item branding col-sm-3 col-md-3 col-lg-3">
                
            {
                       equipo.length > 0 ?    
                        equipo.map(usuario => (
                        <div key={usuario.pk}>

                <div className="card ">
                    <div className="card-body">    
                        <img className="card-img-top" src="{usuario.Imagen_Perfil}"></img>
                        <br></br>
                        <br></br>
                        <center>
                        <h3 className="card-title"><strong>{usuario.Username} </strong></h3>
                        </center>
                        <p className="card-text"><strong>{usuario.Email} </strong></p>
                        <p className="card-text"><strong>{usuario.Nombres} </strong></p>
                        <p className="card-text"><strong>Apellidos: </strong><strong >{usuario.Apellidos} </strong> </p>
                        <p className="card-text"><strong>Rol_usuario </strong><strong>{usuario.Rol_usuario} </strong></p>
                        <p className="card-text"><strong>Fecha: </strong> <strong>{usuario.Fecha} </strong></p>
                        <center>
                            <button type="submit" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" >Edit</button>
                            <br></br>
                            <form action="/eliminarcarro/{{i.pk}}" >
                                <button type="submit" className="btn btn-primary" >Eliminar</button>
                            </form>
                        </center>

                    </div>
                    <EditUsuario/>
                    </div>
                </div>

                )):(
            <div >
            <center>  
                <label colSpan={3}>No Hay Usuarios</label>
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
 

export default ModUsuario;

