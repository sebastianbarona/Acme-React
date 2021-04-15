import React, {useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/usuarios/'

const TablaUsuarios = () => {
  
  const [data, setData]=useState([]);

  const peticionGet=async()=>{
    await axios.get (baseUrl)
    .then(response=>{
      setData(response.data.data);
    })
  }

  React.useEffect(async()=>{
    await peticionGet();
  },[])

     
  return ( 
  
  <div className="col-lg-10 col-md-9 col-12 body_block  align-content-center">
    <div className="portfolio gutters grid img-container align-content-center" >
      <div className="mt75 row justify-content-center">
        <div className="input-group mb-3">
          <form action="/Agregar_usuarios" >
           <button type="submit" className="btn btn-primary">Agregar</button>
           </form>

           <form action="/ModUsuario" >
           <button type="submit" className="btn btn-primary">Modificar</button>
           </form>
        </div>
      </div>
    
        <div className="table-responsive">  
          <table className="table table-hover text-light">
          <thead>
          <tr>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Fecha</th>
          <th scope="col">Rol</th>  
          
       </tr>
          </thead>
          <tbody>

        {data.map(usuario => (

          <tr key={ usuario.Username }>
            <td>{ usuario.Username }</td>
            <td>{ usuario.Email }</td>
            <td>{ usuario.Nombres }</td>
            <td>{ usuario.Apellidos }</td>
            <td>{ usuario.Fecha }</td>
            <td>{ usuario.Rol_usuario }</td>
            <td></td>
            <td></td>
          </tr> 
          
          ))}

          </tbody>
          </table>
      </div>
    </div>
  </div>

    );
}
 
export default TablaUsuarios;

