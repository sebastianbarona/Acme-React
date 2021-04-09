import React, {useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/intermediarios/'

const Tablaintermediarios = () => {


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

  <div class="col-lg-10 col-md-9 col-12 body_block  align-content-center">
    <div className="portfolio gutters grid img-container align-content-center" >
      <div className="mt75 row justify-content-center">
        <div className="input-group mb-3">
            <form action="/Agregar_intermediarios" >
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>

            <form action="/ModIntermediario" >
                <button type="submit" className="btn btn-primary">Modificar</button>
            </form>
        </div>
      </div>
      
        <div className="table-responsive">  
          <table className="table table-hover text-light">
          <thead>
          <tr>
          <th scope="col">ID </th>
          <th scope="col">Intermediario</th>
          <th scope="col">Placa</th>
          <th scope="col">Comprador</th>
          <th scope="col">Dueño</th>
          <th scope="col">Fecha</th>
          <th scope="col">Precio</th>
          </tr>
          </thead>

  <tbody>

  {data.map(intermediario => (
          <tr key={ intermediario.Id_intermediario }>
          <td>{ intermediario.Id_intermediario }</td>
          <td>{ intermediario.Intermediario }</td>
          <td>{ intermediario.Placa }</td>
          <td>{ intermediario.Comprador }</td>
          <td>{ intermediario.Dueno }</td>
          <td>{ intermediario.Fecha }</td>
          <td>{ intermediario.Precio }</td>
          </tr>
          ))}
</tbody>
</table>
      </div>
    </div>
  </div>

    );
}
 
export default Tablaintermediarios;

