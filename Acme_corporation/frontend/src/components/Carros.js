import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {GridList} from '@material-ui/core';
import {Modal, Button, TextField,Select} from '@material-ui/core';

const baseUrl = 'http://127.0.0.1:8000/carros/'
const baseUrl2 = 'http://127.0.0.1:8000/marcas/'

const useStyles = makeStyles((theme) => ({
  modal: {
    position:'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));


const Carros = () => {

  const styles= useStyles();

  const [data, setData]=useState([]);
  const [carro,setresultadocarro]=useState([]);
  const [marcas,setmarcas]=useState([]);
  const [modalBusqueda, setModalBusqueda]=useState(false);

  const [busqueda,setCarroBuscado]=useState({  
    Placa: '',
  });

  const peticionGet=async()=>{
    await axios.get (baseUrl)
    .then(response=>{
      setData(response.data.data);
    })
  }

  const peticionGetmarcas=async()=>{
    await axios.get (baseUrl2)
    .then(response=>{
      setmarcas(response.data.data);
    })
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setCarroBuscado(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(busqueda);
  }

  const peticionShow=async()=>{
    await axios.get (baseUrl+busqueda.Placa,busqueda)
    .then(response=>{
      setresultadocarro(response.data);
      abrirCerrarModalBusqueda()
    })
  }

  console.log(carro)

  const abrirCerrarModalBusqueda=()=>{
    setModalBusqueda(!modalBusqueda);
  }


  React.useEffect(async()=>{
    await peticionGet();
  },[])

  React.useEffect(async()=>{
    await peticionGetmarcas();
  },[])

  const bodyConsulta=(
    <div className={styles.modal}>
      <h3>Resultado Busqueda</h3>
      <img src={carro.Imagen}  alt="pro1"/>
      <br/>
      <br/>
      <select className="custom-select" onChange={handleChange} name="Marca" value={carro.Marca}>
          <option></option> 
              {marcas.map(elemento=>(
          <option key={elemento.Id_Marca} value={elemento.Id_Marca}>{elemento.Nombre}</option> 
              ))}
         </select>
      <br />
      <TextField name="Placa" className={styles.inputMaterial} label="Placa" onChange={handleChange} value={carro.Placa}/>
      <br />
      <TextField name="Modelo" className={styles.inputMaterial} label="Modelo" onChange={handleChange} value={carro.Modelo}/>
      <br />
      <TextField name="Dueño" className={styles.inputMaterial} label="Dueño" onChange={handleChange} value={carro.Dueño}/>
      <br />
      <TextField type="date" name="Fechapublicacion" className={styles.inputMaterial} label="Fecha Publicacion" onChange={handleChange} value={carro.Fechapublicacion}/>
      <br />
      <TextField name="Precio" className={styles.inputMaterial} label="Precio" onChange={handleChange} value={carro.Precio}/>
      <br />
      <TextField name="Estado_Carro" className={styles.inputMaterial} label="Estado Carro" onChange={handleChange} value={carro.Estado_Carro}/>
      <br />  
      <TextField name="Estado" className={styles.inputMaterial} label="Estado" onChange={handleChange} value={carro.Estado}/>
      <br /><br />
      <div align="right">
      <Button onClick={()=>abrirCerrarModalBusqueda()}>Cancelar</Button>
      </div>
    </div>
  )


    return ( 

  <div className="col-lg-10 col-md-9 col-12 body_block">
    <div>
      <div className="mt75 row justify-content-center">
        <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={handleChange} name="Placa" placeholder="Placa"  aria-describedby="basic-addon1"></input>
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" onClick={()=>peticionShow()} type="button">Buscar Carro</button>
            </div>
        </div>
        
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
                     <Modal
                     open={modalBusqueda}
                     onClose={abrirCerrarModalBusqueda}>
                        {bodyConsulta}
                     </Modal>
   
</div>

</div>
    
  
    );
}
 
export default Carros;

