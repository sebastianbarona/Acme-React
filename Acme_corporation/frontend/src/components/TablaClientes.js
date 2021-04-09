import React, {useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/personas/'


const Tabla = () => {

  const [data, setData]=useState([]);

  const peticionGet=async()=>{
    await axios.get (baseUrl)
    .then(response=>{
      setData(response.data.data);
      console.log(setData)
    })
  }

  React.useEffect(async()=>{
    await peticionGet();
  },[])

  
  return ( 


  <div class="col-lg-10 col-md-9 col-12 body_block  align-content-center">
    <div className="portfolio gutters grid img-container align-content-center" >
      <div className="mt75 row justify-content-center">
        <div className="input-group mb-3">
        <form action="/Agregar_persona" >
           <button type="submit" className="btn btn-primary">Agregar</button>
           </form>

           <form action="/ModPersona">
           <button type="submit" className="btn btn-primary">Modificar</button>
           </form>
     
          </div>
      </div>
    
        <div className="table-responsive">  
          <table className="table table-hover text-light">
          <thead>
          <tr>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Cedula</th>
          <th scope="col">Telefono</th>
          <th scope="col">Fecha</th>
          </tr>
          </thead>
          
  <tbody>

  {data.map(persona => (

  <tr key={persona.Cedula} >
          <td>{ persona.Nombres }</td>
          <td>{ persona.Apellidos }</td>
          <td>{ persona.Cedula }</td> 
          <td>{ persona.Telefono }</td>
          <td>{ persona.Fecha }</td>
          </tr>
      ))}

</tbody>

</table>
      </div>
    </div>
  </div>

    );
}
 
export default Tabla;

