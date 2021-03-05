import React from 'react';

const TablaVentas = () => {

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

  <div className="col-lg-10 col-md-9 col-12 body_block  align-content-center">
    <div className="portfolio gutters grid img-container align-content-center" >
      <div className="mt75 row justify-content-center">
        <div className="input-group mb-3">
            <form action="/Agregar_ventas" >
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
            <label>"                    "</label>
            <form action="/ModVenta" >
                <button type="submit" className="btn btn-primary">Modificar</button>
            </form>
        </div>
      </div>
      
        <div className="table-responsive">  
          <table className="table table-hover text-light">
          <thead>
          <tr>
          <th scope="col">Id_venta</th>
          <th scope="col">Placa</th>
          <th scope="col">Vendedor</th>
          <th scope="col">Comprador</th>
          <th scope="col">Fecha</th>
          <th scope="col">Precio</th>
          </tr>
          </thead>
         
          <tbody>

          {
          equipo.length > 0 ?    
          equipo.map(venta => (
          <tr key={venta.pk}>
          <td>{venta.Placa}</td>
          <td>{venta.Vendedor}</td>
          <td>{venta.Comprador}</td>
          <td>{venta.Fecha}</td>
          <td>{venta.Precio}</td>
          </tr>
                )):(
          <tr>
              <td colSpan={3}>No Ventas</td>
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
 
export default TablaVentas;

