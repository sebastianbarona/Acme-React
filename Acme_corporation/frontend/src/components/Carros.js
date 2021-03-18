import React from 'react';


const Carros = () => {

  const [equipo,setEquipo] = React.useState([])

  React.useEffect(() => {
    obtenerDatos()
          },[])
  
  const obtenerDatos = async() =>{
    const data = await fetch('http://127.0.0.1:8000/carros')
    const carros = await data.json()
    setEquipo(carros.data)

    console.log(carros.data)

  }

    return ( 


  <div className="col-lg-10 col-md-9 col-12 body_block  align-content-center">
    <div className="portfolio gutters grid img-container align-content-center" >
      <div className="mt75 row justify-content-center">
      <form action="/buscar/">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button">Buscar Carro</button>
            </div>
            <input type="text" className="form-control" placeholder="Marca"  aria-describedby="basic-addon1"></input>
        </div>
      </form>
        
        <div className="input-group mb-3">
        <form action="/Agregar_carros" >
           <button type="submit" className="btn btn-primary">Agregar</button>
           </form>
           <label>"                    "</label>
           <form action="/ModCarros" >
           <button type="submit" className="btn btn-primary">Modificar</button>
           </form>
          </div>

      </div>
      
      {
                equipo.length > 0 ?    
                equipo.map(carro => (


      <div className="portfolio gutters grid img-container">
            <div className="grid-item branding col-sm-12 col-md-6 col-lg-3">
                <div className="grid-sizer col-sm-12 col-md-6 col-lg-3"></div>
                <a href={carro.Imagen} title="<strong style=color:coral> Precio: {carro.Precio} $ </strong><br><br><strong style=color:coral>Placa: </strong> 
                    {{carro.Placa}} <br><br><strong style=color:coral> Dueño: </strong> {{carro.Dueño}}<br><br><strong style=color:coral> Fecha Publicacion: </strong>
                    {{carro.Fechapublicacion}}<br><br><strong style=color:coral> Estado Carro: </strong> {{carro.Estado_Carro}}<br><br><strong style=color:coral> Estado: </strong> {{carro.Estado}}">
                    <div className="project_box_one">
                      <img src={carro.Imagen}  alt="pro1"/>
                        <div className="product_info">
                            <div className="product_info_text">
                                <div className="product_info_text_inner">
                                    <i className="ion ion-plus"></i>
                                    <h3>{carro.Marca.Nombre}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
                  )):(
                    <div >
                    <center>  
                        <label colSpan={3}>No Hay Carros</label>
                    </center>
                    </div>
                        )
        }

    </div>
  </div>

    );
}
 
export default Carros;

