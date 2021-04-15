import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, Button, TextField,Select} from '@material-ui/core';
import {Delete,} from '@material-ui/icons';
import {GridList} from '@material-ui/core';

const baseUrl = 'http://127.0.0.1:8000/carros/'
const baseunoUrl = 'http://127.0.0.1:8000/marcas/'

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

const ModCarros = () => {
      const styles= useStyles();    
      const [data, setData]=useState([]);
      const [marcas,setData1]=useState([]);

      const [modalEditar, setModalEditar]=useState(false);
      const [modalEliminar, setModalEliminar]=useState(false);
        
      const [carro, setCarroSeleccionado]=useState({
            Marca: parseInt(''),
            Modelo: '',
            Placa: '',
            Dueño: '',
            Fechapublicacion: '',
            Precio: parseInt(''),
            Imagen: '',
            Estado_Carro: '',
            Estado: ''
          })
        
      const handleChange=e=>{
            const {name, value}=e.target;
            setCarroSeleccionado(prevState=>({
              ...prevState,
              [name]: value
            }))
            console.log(carro);
          }
    
      const peticionGet=async()=>{
          await axios.get (baseUrl)
          .then(response=>{
            setData(response.data.data);
          })
        }

      const peticionGetmarcas=async()=>{
          await axios.get (baseunoUrl)
          .then(response=>{
            setData1(response.data.data);
          })
        }

    
      const peticionPut=async()=>{
            await axios.put(baseUrl+carro.Placa, carro)
            .then(response =>{
              var dataNueva=data;
              dataNueva.map(consola=>{
                if(carro.Placa === consola.Placa){
                
                  consola.Marca = carro.Marca;
                  consola.Modelo = carro.Modelo;
                  consola.Dueño = carro.Dueño;
                  consola.Fechapublicacion = carro.Fechapublicacion;
                  consola.Precio = carro.Precio;
                  consola.Imagen = carro.Imagen;
                  consola.Estado_Carro = carro.Estado_Carro;
                  consola.Estado = carro.Estado;

                }
              })
              setData(dataNueva);
              alert("Usuario Actualizado")
              abrirCerrarModalEditar();
            })
          }
        
      const peticionDelete=async()=>{
            await axios.delete(baseUrl+carro.Placa)
            .then(response=>{
              setData(data.filter(consola=>consola.Placa!==carro.Placa));
              abrirCerrarModalEliminar();
            })
          }
        
      const abrirCerrarModalEditar=()=>{
        setModalEditar(!modalEditar);
      }
    
      const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar);
      }
    
      const seleccionarcarro=(consola, caso)=>{
        setCarroSeleccionado(consola);
        (caso=='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
      }
    
        React.useEffect(async()=>{
          await peticionGet();
        },[])
    
        React.useEffect(async()=>{
          await peticionGetmarcas();
        },[])

      const bodyEditar=(
            <div className={styles.modal}>
              <h3>Editar Carro</h3>
              <Select name="Marca" className={styles.inputMaterial} label="Marca" onChange={handleChange} value={carro.Marca}>
                    {marcas.map(elemento=>(
                        <option key={elemento.Id_Marca} value={elemento.Id_Marca}>{elemento.Nombre}</option> 
                            ))}
              </Select>
              <br/>
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
              <TextField name="Imagen" className={styles.inputMaterial} label="Imagen" onChange={handleChange} value={carro.Imagen}/>
              <br />
              <TextField name="Estado_Carro" className={styles.inputMaterial} label="Estado Carro" onChange={handleChange} value={carro.Estado_Carro}/>
              <br />
              <TextField name="Estado" className={styles.inputMaterial} label="Estado" onChange={handleChange} value={carro.Estado}/>
              <br /><br />
              <div align="right">
                <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
                <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
              </div>
            </div>
          )
        
      const bodyEliminar=(
            <div className={styles.modal}>
              <p>Estás seguro que deseas eliminar el carro <b>{carro.Placa}</b> ? </p>
              <div align="right">
                <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
                <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button> 
              </div>    
            </div>
          )
    
    return ( 

<div className="col-lg-10 col-md-9 body_block">
    <div> 
        <h3> Modificar Carro </h3>
        <p> Bienvenido a Acme Corporation recuerde llenar muy bien los campos antes de Modificar un Carro </p>
        <br></br>
    </div>
                
            <div className="grid-item branding ">
            <GridList cellHeight={530} cols={4} >
            {
                data.length > 0 ?    
                data.map(carro => (
              <div className="project_box_two" > 
                <div className="card ">
                    <img className="card-img-top" src={ carro.Imagen }></img>
                    <div className="card-body">    
                        <h5 className="card-title"><strong>Marca :</strong>{carro.Marca}</h5>        
                        <p className="card-text"><strong>Placa :</strong><strong>{ carro.Placa }</strong></p>
                        <p className="card-text"><strong>Dueño :</strong><strong >{ carro.Dueño }</strong></p>
                        <p className="card-text"><strong>Fecha Publicacion :</strong> <strong >{ carro.Fecha_Publicacion }</strong></p>
                        <p className="card-text"><strong>Estado :</strong><strong >{ carro.Estado }</strong> </p>
                        <p className="card-text"><strong>Precio :</strong><strong >{ carro.Precio }</strong> </p>
                        <center>
                        <Button className="btn btn-primary"  onClick={()=>seleccionarcarro(carro, 'Editar')}>Editar</Button> 
                           &nbsp;&nbsp;&nbsp;
                        <Delete  className={styles.iconos} onClick={()=>seleccionarcarro(carro, 'Eliminar')}/>
                          </center>
                    </div>
                    <Modal
                     open={modalEditar}
                     onClose={abrirCerrarModalEditar}>
                        {bodyEditar}
                     </Modal>
                
                     <Modal
                     open={modalEliminar}
                     onClose={abrirCerrarModalEliminar}>
                        {bodyEliminar}
                     </Modal>
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
          
          </GridList>
            </div>
        </div>
    
           
      );
    }
 

export default ModCarros;

