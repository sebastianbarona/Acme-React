import React from 'react';


const Carros = () => {
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
      
      <div className="portfolio gutters grid img-container">
            <div className="grid-item branding col-sm-12 col-md-6 col-lg-3">
                <div className="grid-sizer col-sm-12 col-md-6 col-lg-3"></div>
                <a href="https://i.pinimg.com/564x/b3/a4/c1/b3a4c17c3d200b5318745fdb6b04e38e.jpg" title="<strong style=color:coral> Precio: {{i.Precio}} $ </strong><br><br><strong style=color:coral>Placa: </strong> 
                    {{i.Placa}} <br><br><strong style=color:coral> Dueño: </strong> {{i.Dueño}}<br><br><strong style=color:coral> Fecha Publicacion: </strong>
                    {{i.Fechapublicacion}}<br><br><strong style=color:coral> Estado Carro: </strong> {{i.Estado_Carro}}<br><br><strong style=color:coral> Estado: </strong> {{i.Estado}}">
                    <div className="project_box_one">
                      <img src="https://i.pinimg.com/564x/b3/a4/c1/b3a4c17c3d200b5318745fdb6b04e38e.jpg"  alt="pro1"/>
                        <div className="product_info">
                            <div className="product_info_text">
                                <div className="product_info_text_inner">
                                    <i className="ion ion-plus"></i>
                                    <h3>Marca</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>


    </div>
  </div>

    );
}
 
export default Carros;

