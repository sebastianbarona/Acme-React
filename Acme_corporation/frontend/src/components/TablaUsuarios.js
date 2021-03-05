import React from 'react';


const TablaUsuarios = () => {
  
  const [equipo,setEquipo] = React.useState([])

  React.useEffect(() => {
    obtenerDatos()
          },[])
  
  const obtenerDatos = async() =>{
    const data = await fetch('http://127.0.0.1:8000/usuarios')
    const usuarios = await data.json()
    setEquipo(usuarios.data)

  }

  console.log(equipo)
   
  return ( 
  
  <div className="col-lg-10 col-md-9 col-12 body_block  align-content-center">
    <div className="portfolio gutters grid img-container align-content-center" >
      <div className="mt75 row justify-content-center">
        <div className="input-group mb-3">
          <form action="/Agregar_usuarios" method="GET">
           <button type="submit" className="btn btn-primary">Agregar</button>
           </form>
           <label>"                    "</label>
           <form action="/ModUsuario" method="GET">
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

          {
        equipo.length > 0 ?    
        equipo.map(usuario => (
          <tr key={usuario.pk}>
            <td>{usuario.Username}</td>
            <td>{usuario.Email}</td>
            <td>{usuario.Nombres}</td>
            <td>{usuario.Apellidos}</td>
            <td>{usuario.Fecha}</td>
            <td>{usuario.Rol_usuario}</td>
          </tr>
              )):(
              <tr>
                <td colSpan={3}>No Users</td>
              </tr>

              )
          }
          </tbody>
          </table>
      </div>
    </div>
  </div>

    );
}
 
export default TablaUsuarios;

