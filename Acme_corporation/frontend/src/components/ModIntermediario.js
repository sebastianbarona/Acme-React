import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, Button, TextField,Select} from '@material-ui/core';
import {Delete } from '@material-ui/icons';
import {GridList} from '@material-ui/core';


const baseUrl = 'http://127.0.0.1:8000/intermediarios/'
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
    
    const [intermediada, setIntermediadaSeleccionada]=useState({
       
        Id_intermediario: parseInt(''),
        Placa: '',
        Vendedor: '',
        Comprador: '',
        Dueno: '',
        Fecha: '',
        Precio: parseInt('')
    
      })
    
    const handleChange=e=>{
        const {name, value}=e.target;
        setIntermediadaSeleccionada(prevState=>({
          ...prevState,
          [name]: value
        }))
        console.log(intermediada);
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
        await axios.put(baseUrl+intermediada.Id_intermediario, intermediada)
        .then(response =>{
          var dataNueva=data;
          dataNueva.map(consola=>{
            if(intermediada.Id_intermediario === consola.Id_intermediario){
              consola.Intermediario = intermediada.Intermediario;
              consola.Placa = intermediada.Placa;
              consola.Comprador = intermediada.Comprador;
              consola.Dueno = intermediada.Dueno;
              consola.Fecha = intermediada.Fecha;
              consola.Precio = intermediada.Precio;
            }
          })
          setData(dataNueva);
          alert("Venta Intermediada Actualizada")
          abrirCerrarModalEditar();
        })
      }
    
    const peticionDelete=async()=>{
        await axios.delete(baseUrl+intermediada.Id_intermediario)
        .then(response=>{
          setData(data.filter(consola=>consola.Id_intermediario!==intermediada.Id_intermediario));
          abrirCerrarModalEliminar();
        })
      }
      

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarintermediada=(consola, caso)=>{
    setIntermediadaSeleccionada(consola);
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
         
          <TextField name="Id_intermediario" className={styles.inputMaterial} label="ID" onChange={handleChange} value={intermediada.Id_intermediario}/>
          <br />
          <Select name="Intermediario" className={styles.inputMaterial} label="Username" onChange={handleChange} value={intermediada.Intermediario}>
          {usuarios.map(elemento=>(
          <option key={elemento.Username} value={elemento.Username}>{elemento.Username}</option>
                            ))}
            </Select>
            <br />
          <Select name="Placa" className={styles.inputMaterial} label="Placa" onChange={handleChange} value={intermediada.Placa}>
                    {carros.map(elemento=>(
                        <option key={elemento.Placa} value={elemento.Placa}>{elemento.Placa}</option> 
                            ))}
          </Select>
          <br />
          <Select name="Comprador" className={styles.inputMaterial} label="Comprador" onChange={handleChange} value={intermediada.Comprador}>
          {personas.map(elemento=>(
          <option key={elemento.Cedula} value={elemento.Cedula}>{elemento.Cedula}</option>
                            ))}
          </Select>
          <br />
          <Select name="Dueno" className={styles.inputMaterial} label="Dueño" onChange={handleChange} value={intermediada.Dueno}>
          {carros.map(elemento=>(
          <option key={elemento.Dueño} value={elemento.Dueño}>{elemento.Dueño}</option>
                            ))}
          </Select>
          <br />
          <TextField type="date" name="Fecha" className={styles.inputMaterial} label="Fecha" onChange={handleChange} value={intermediada.Fecha}/>
          <br />
          <TextField name="Precio" className={styles.inputMaterial} label="Precio" onChange={handleChange} value={intermediada.Precio}/>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )
    
      const bodyEliminar=(
        <div className={styles.modal}>
          <p>Estás seguro que deseas eliminar la Venta <b>{intermediada.Id_intermediario}</b> ? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button> 
          </div>    
        </div>
      )
    
    return (

<div className="col-lg-10 col-md-9 body_block"> 
    <div> 
        <h3> Modificar Intermediario </h3>
        <p> Bienvenido a Acme Corporation recuerde llenar muy bien los campos antes de Modificar un Intermediario </p>
        <br></br>
    </div>


    <div className="grid-item branding ">
            <GridList cellHeight={450} cols={4} >
            {
                data.length > 0 ?    
                data.map(intermediario => (
             <div className="project_box_two">
                <div className="card ">
                    <div className="card-body">    
                        <h5 className="card-title"><strong>{ intermediario.Id_intermediario }</strong></h5>
                        <p className="card-text"><strong>{ intermediario.Intermediario }</strong></p>
                        <p className="card-text"><strong>Placa :</strong><strong >{ intermediario.Placa }</strong> </p>
                        <p className="card-text"><strong>Comprador:</strong><strong >{ intermediario.Comprador }</strong></p>
                        <p className="card-text"><strong>Dueño:</strong><strong >{ intermediario.Dueno }</strong></p>
                        <p className="card-text"><strong>Fecha :</strong> <strong >{ intermediario.Fecha }</strong></p>
                        <p className="card-text"><strong>Precio :</strong> <strong >{ intermediario.Precio }</strong></p>
                        <center>
                        <Button className="btn btn-primary"  onClick={()=>seleccionarintermediada(intermediario, 'Editar')}>Modificar</Button> 
                           &nbsp;&nbsp;&nbsp;
                        <Delete  className={styles.iconos} onClick={()=>seleccionarintermediada(intermediario, 'Eliminar')}/>
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
                        <label colSpan={3}>No Hay Transacciones Intermediadas</label>
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


