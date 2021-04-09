import React, {useState} from 'react';
import axios from 'axios';
import {GridList,GridListTile} from '@material-ui/core';

const baseUrl = 'http://127.0.0.1:8000/carros/'

const Carros = () => {

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

  <div className="col-lg-10 col-md-9 col-12 body_block">
    <div>
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
           <label></label>
           <form action="/ModCarros" >
           <button type="submit" className="btn btn-primary">Modificar</button>
           </form>
          </div>

      </div>
      <div class="portfolio gutters grid img-container">
      <GridList cellHeight={220} cols={2}>
      {
                data.length > 0 ?    
                data.map(carro => (
        <div class="grid-item branding col-sm-12 col-md-6 col-lg-3">    
            <a href={carro.Imagen} title={ "<strong style=color:coral> Precio: </strong>"+ carro.Precio + "$" + 
            "<br> </strong><br><strong style=color:coral>Placa: </strong>" + carro.Placa + "<br><strong style=color:coral> Dueño: </strong>"
            + carro.Dueño + "<br><strong style=color:coral> Fecha Publicacion: </strong>" + carro.Fechapublicacion 
            + "<br><strong style=color:coral> Estado Carro: </strong>" + carro.Estado_Carro + "<br><strong style=color:coral> Estado: </strong>"
            + carro.Estado }>
              <div className="project_box_one">
                  <img src={carro.Imagen}  alt="pro1"/>
                    <div className="product_info">
                      <div className="product_info_text">
                        <div className="product_info_text_inner">
                          <i className="ion ion-plus"></i>
                            <h3>{carro.Placa}</h3>
                        </div>
                      </div>
                    </div>
              </div>
            </a>
            </div>
      )):(
                    <div >
                    <center>  
                        <label colSpan={3}>No Hay Carros</label>
                    </center>
                    </div>
                    )}
</GridList>
</div>
    
</div>

</div>
    
  
    );
}
 
export default Carros;

