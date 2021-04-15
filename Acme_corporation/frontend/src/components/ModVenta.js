import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, Button, TextField,Select} from '@material-ui/core';
import {Delete } from '@material-ui/icons';
import {GridList} from '@material-ui/core';

const baseUrl = 'http://127.0.0.1:8000/ventas/'
const baseunoUrl = 'http://127.0.0.1:8000/carros/'
const basedosUrl = 'http://127.0.0.1:8000/personas/'
const basetresUrl = 'http://127.0.0.1:8000/usuarios/'

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


const ModVenta = () => {

    const styles= useStyles();

    const [data, setData]=useState([]);
    const [carros, setData1]=useState([]);
    const [personas, setData2]=useState([]);
    const [usuarios, setData3]=useState([]);

    const [modalEditar, setModalEditar]=useState(false);
    const [modalEliminar, setModalEliminar]=useState(false);
    
    const [venta, setVentaSeleccionada]=useState({
       
        Id_venta: parseInt(''),
        Placa: '',
        Vendedor: '',
        Comprador: '',
        Fecha: '',
        Precio: parseInt('')
    
      })
    
    const handleChange=e=>{
        const {name, value}=e.target;
        setVentaSeleccionada(prevState=>({
          ...prevState,
          [name]: value
        }))
        console.log(venta);
      }

    const peticionGet=async()=>{
      await axios.get (baseUrl)
      .then(response=>{
        setData(response.data.data);
      })
    }

    const peticionGetcarros=async()=>{
        await axios.get (baseunoUrl)
        .then(response=>{
            setData1(response.data.data);
        })
      }
      
    const peticionGetpersonas=async()=>{
        await axios.get (basedosUrl)
        .then(response=>{
            setData2(response.data.data);
        })
      }
    
    const peticionGetusuarios=async()=>{
        await axios.get (basetresUrl)
        .then(response=>{
            setData3(response.data.data);
        })
      }

    const peticionPut=async()=>{
        await axios.put(baseUrl+venta.Id_venta, venta)
        .then(response =>{
          var dataNueva=data;
          dataNueva.map(consola=>{
            if(venta.Id_venta === consola.Id_venta){
              consola.Placa = venta.Placa;
              consola.Vendedor = venta.Vendedor;
              consola.Comprador = venta.Comprador;
              consola.Fecha = venta.Fecha;
              consola.Precio = venta.Precio;
            }
          })
          setData(dataNueva);
          alert("Venta Actualizada")
          abrirCerrarModalEditar();
        })
      }
    
    const peticionDelete=async()=>{
        await axios.delete(baseUrl+venta.Id_venta)
        .then(response=>{
          setData(data.filter(consola=>consola.Id_venta!==venta.Id_venta));
          abrirCerrarModalEliminar();
        })
      }
      

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarventa=(consola, caso)=>{
    setVentaSeleccionada(consola);
    (caso=='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

    React.useEffect(async()=>{
      await peticionGet();
    },[])

    React.useEffect(async()=>{
        await peticionGetcarros();
      },[])

    React.useEffect(async()=>{
        await peticionGetpersonas();
      },[])

    React.useEffect(async()=>{
        await peticionGetusuarios();
      },[])  
    

    const bodyEditar=(
        <div className={styles.modal}>
          <h3>Modificar Venta</h3>
          <TextField name="Id_venta" className={styles.inputMaterial} label="ID" onChange={handleChange} value={venta.Id_venta}/>
          <br />
          <Select name="Placa" className={styles.inputMaterial} label="Placa" onChange={handleChange} value={venta.Placa}>
                    {carros.map(elemento=>(
                        <option key={elemento.Placa} value={elemento.Placa}>{elemento.Placa}</option> 
                            ))}
          </Select>
          <br />
          <Select name="Vendedor" className={styles.inputMaterial} label="Username" onChange={handleChange} value={venta.Vendedor}>
          {usuarios.map(elemento=>(
          <option key={elemento.Username} value={elemento.Username}>{elemento.Username}</option>
                            ))}
            </Select>
          <br />
          <Select name="Comprador" className={styles.inputMaterial} label="Cliente" onChange={handleChange} value={venta.Comprador}>
          {personas.map(elemento=>(
          <option key={elemento.Cedula} value={elemento.Cedula}>{elemento.Cedula}</option>
                            ))}
          </Select>
          <br />
          <TextField type="date" name="Fecha" className={styles.inputMaterial} label="Fecha" onChange={handleChange} value={venta.Fecha}/>
          <br />
          <TextField name="Precio" className={styles.inputMaterial} label="Precio" onChange={handleChange} value={venta.Precio}/>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )
    
      const bodyEliminar=(
        <div className={styles.modal}>
          <p>Estás seguro que deseas eliminar la Venta <b>{venta.Id_venta}</b> ? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button> 
          </div>    
        </div>
      )
    
 
    return ( 

<div className="col-lg-10 col-md-9 body_block">
    <div> 
        <h3> Modificar Venta </h3>
        <p> Bienvenido a Cacharrerias Don Andres recuerde llenar muy bien los campos antes de Modificar una Venta </p>
        <br></br>
    </div>

         <div className="grid-item branding ">
            <GridList cellHeight={450} cols={4} >
            {
                       data.length > 0 ?    
                        data.map(venta => (
              <div className="project_box_two">
                <div className="card ">
                    <div className="card-body">    
                        <h5 className="card-title"><strong>{venta.Id_venta} </strong></h5>
                        <p className="card-text"><strong>{venta.Placa} </strong></p>
                        <p className="card-text"><strong>Empleado :</strong><strong >{venta.Vendedor} </strong> </p>
                        <p className="card-text"><strong>Cliente:</strong><strong >{venta.Comprador} </strong></p>
                        <p className="card-text"><strong>Fecha :</strong> <strong >{venta.Fecha} </strong></p>
                        <p className="card-text"><strong>Precio :</strong> <strong >{venta.Precio} </strong></p>
                        <center>
                        <Button className="btn btn-primary"  onClick={()=>seleccionarventa(venta, 'Editar')}>Modificar</Button> 
                           &nbsp;&nbsp;&nbsp;
                        <Delete  className={styles.iconos} onClick={()=>seleccionarventa(venta, 'Eliminar')}/>
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
                    <label colSpan={3}>No Hay Ventas</label>
                </center>
                </div>
        )}
        </GridList>
                <br></br>        
            </div>
        </div>

);
}
 

export default ModVenta;

