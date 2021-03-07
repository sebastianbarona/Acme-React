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
                
                <div className="card ">
                    <div className="card-body">    
                        <img className="card-img-top" src="https://scontent.fclo1-1.fna.fbcdn.net/v/t1.0-9/158102831_3920299611353864_862414796055326428_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGOx_qq8SrJLOI9tI_CnjledFfctoOb3Mh0V9y2g5vcyD-7xtiVA_FzE6U5dODHM9_3CQMj9CPDOx5qLHT7EUQp&_nc_ohc=HZ05t2Phm7sAX8elNiu&_nc_ht=scontent.fclo1-1.fna&oh=a5e0477345bdba13e95574d3f451e3cc&oe=606A4333"></img>
                        <br></br>
                        <br></br>
                        <center>
                        <h3 className="card-title"><strong>usuario.Username </strong></h3>
                        </center>
                        <p className="card-text"><strong>usuario.Email </strong></p>
                        <p className="card-text"><strong>usuario.Nombres </strong></p>
                        <p className="card-text"><strong>Apellidos: </strong><strong >usuario.Apellidos </strong> </p>
                        <p className="card-text"><strong>Rol_usuario </strong><strong>usuario.Rol_usuario </strong></p>
                        <p className="card-text"><strong>Fecha: </strong> <strong>usuario.Fecha </strong></p>
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
            <br></br>                            
        </div>
    </div>
</div> 
                               

);
}
 

export default ModUsuario;

