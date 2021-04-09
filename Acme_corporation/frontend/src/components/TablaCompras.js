import React, {useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/compras/'

const TablaCompras = () => {

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
            <form action="/Agregar_compras" >
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>

            <form action="/ModCompra" >
                <button type="submit" className="btn btn-primary">Modificar</button>
            </form>
        </div>
      </div>
      
        <div className="table-responsive">  
          <table className="table table-hover text-light">
          <thead>
          <tr>
          <th scope="col">Codigo de compra</th>
          <th scope="col">Placa</th>
          <th scope="col">Marca</th>
          <th scope="col">Vendedor</th>
          <th scope="col">Comprador</th>
          <th scope="col">Fecha</th>
          <th scope="col">Precio</th>
          </tr>
          </thead>
          <tbody>

          {data.map(compra => (

          <tr key={ compra.Id_compra }>
            
            <td>{compra.Id_compra}</td>
            <td>{ compra.Placa }</td>
            <td>{ compra.Marca }</td>
            <td>{ compra.Vendedor }</td> 
            <td>{ compra.Comprador }</td>
            <td>{ compra.Fecha }</td>
            <td>{ compra.Precio }</td>
            
            </tr>
                   ))}
         
            </tbody>
</table>
      </div>
    </div>
  </div>

    );
}
 
export default TablaCompras;

