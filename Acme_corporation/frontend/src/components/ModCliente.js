import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, Button, TextField} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {GridList} from '@material-ui/core';

const baseUrl = 'http://127.0.0.1:8000/personas/'

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



const ModCliente = () => {
    const styles= useStyles();

    const [data, setData]=useState([]);
    const [modalEditar, setModalEditar]=useState(false);
    const [modalEliminar, setModalEliminar]=useState(false);
    
    const [persona, setPersonaSeleccionada]=useState({
        Nombres: '',
        Apellidos: '',
        Cedula: '',
        Telefono: '',
        Fecha: ''
    
      })
    
    const handleChange=e=>{
        const {name, value}=e.target;
        setPersonaSeleccionada(prevState=>({
          ...prevState,
          [name]: value
        }))
        console.log(persona);
      }

    const peticionGet=async()=>{
      await axios.get (baseUrl)
      .then(response=>{
        setData(response.data.data);
      })
    }

    const peticionPut=async()=>{
        await axios.put(baseUrl+persona.Cedula, persona)
        .then(response =>{
          var dataNueva=data;
          dataNueva.map(consola=>{
            if(persona.Cedula === consola.Cedula){
              consola.Nombres = persona.Nombres;
              consola.Apellidos = persona.Apellidos;
              consola.Telefono = persona.Telefono;
              consola.Fecha = persona.Fecha;
            }
          })
          setData(dataNueva);
          alert("Usuario Actualizado")
          abrirCerrarModalEditar();
        })
      }
    
    const peticionDelete=async()=>{
        await axios.delete(baseUrl+persona.Cedula)
        .then(response=>{
          setData(data.filter(consola=>consola.Cedula!==persona.Cedula));
          abrirCerrarModalEliminar();
        })
      }
    

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarpersona=(consola, caso)=>{
    setPersonaSeleccionada(consola);
    (caso=='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

    React.useEffect(async()=>{
      await peticionGet();
    },[])

    const bodyEditar=(
        <div className={styles.modal}>
          <h3>Editar Persona</h3>
          <TextField name="Nombres" className={styles.inputMaterial} label="Nombres" onChange={handleChange} value={persona.Nombres}/>
          <br />
          <TextField name="Apellidos" className={styles.inputMaterial} label="Apellidos" onChange={handleChange} value={persona.Apellidos}/>
          <br />
          <TextField name="Cedula" className={styles.inputMaterial} label="Cedula" onChange={handleChange} value={persona.Cedula}/>
          <br />
          <TextField name="Telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange} value={persona.Telefono}/>
          <br />
          <TextField type="date" name="Fecha" className={styles.inputMaterial} label="Fecha" onChange={handleChange} value={persona.Fecha}/>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )
    
      const bodyEliminar=(
        <div className={styles.modal}>
          <p>Estás seguro que deseas eliminar la persona <b>{persona.Nombres}</b> ? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button> 
          </div>    
        </div>
      )
    

    return ( 

<div className="col-lg-10 col-md-9 body_block">
    <div> 
        <h3> Modificar Cliente </h3>
        <p> Bienvenido a Acme Corporation recuerde llenar muy bien los campos antes de Modificar un Cliente </p>
        <br></br>
    </div>

    <div className="grid-item branding ">
            <GridList cellHeight={450} cols={4} >
            {
                data.length > 0 ?    
                data.map(persona => (
              <div className="project_box_two">
                <div className="card ">
                    <div className="card-body">    
                        <h3 className="card-title"><strong>{ persona.Cedula }</strong></h3>
                        <p className="card-text"><strong>{ persona.Nombres }</strong></p>
                        <p className="card-text"><strong>Apellidos: </strong><strong >{ persona.Apellidos }</strong> </p>
                        <p className="card-text"><strong>Telefono: </strong><strong >{ persona.Telefono }</strong></p>
                        <p className="card-text"><strong>Fecha: </strong> <strong >{ persona.Fecha }</strong></p>
                        <center>
                            
                            <Button className="btn btn-primary"  onClick={()=>seleccionarpersona(persona, 'Editar')}>Editar</Button> 
                           &nbsp;&nbsp;&nbsp;
                            <Delete  className={styles.iconos} onClick={()=>seleccionarpersona(persona, 'Eliminar')}/>
                        
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
                    <label colSpan={3}>No Hay Clientes</label>
                </center>
                </div>
     )}
          </GridList>
                <br></br>                            
            </div>
        </div>

            

);
}
 

export default ModCliente;

