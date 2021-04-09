import React, {useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/ventas/'

const TablaVentas = () => {


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
            <form action="/Agregar_ventas" >
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>

            <form action="/ModVenta" >
                <button type="submit" className="btn btn-primary">Modificar</button>
            </form>
        </div>
      </div>
      
        <div className="table-responsive">  
          <table className="table table-hover text-light">
          <thead>
          <tr>
          <th scope="col">Codigo de venta</th>
          <th scope="col">Placa</th>
          <th scope="col">Vendedor</th>
          <th scope="col">Comprador</th>
          <th scope="col">Fecha</th>
          <th scope="col">Precio</th>
          </tr>
          </thead>
         
          <tbody>

          {data.map(venta => (

          <tr key={ venta.Id_venta }>
         
          <td>{venta.Id_venta}</td> 
          <td>{ venta.Placa }</td>
          <td>{ venta.Vendedor }</td>
          <td>{ venta.Comprador }</td>
          <td>{ venta.Fecha }</td>
          <td>{ venta.Precio }</td>
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
 
export default TablaVentas;

