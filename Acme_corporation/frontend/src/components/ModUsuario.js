import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, Button, TextField,Select} from '@material-ui/core';
import {Delete,} from '@material-ui/icons';
import {GridList,GridListTile} from '@material-ui/core';

const baseUrl = 'http://127.0.0.1:8000/usuarios/'


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


const ModUsuario = () => {

    const styles= useStyles();

    const [data, setData]=useState([]);
    const [modalEditar, setModalEditar]=useState(false);
    const [modalEliminar, setModalEliminar]=useState(false);
    
    const [usuario, setUsuarioSeleccionado]=useState({
        Username: '',
        Email: '',
        Nombres: '',
        Imagen_Perfil: '',
        Password:'',
        Password2:'',
        Usuario_activo: Boolean('true'),
        Fecha: '',
        Rol_usuario:''
    
      })
    
    const handleChange=e=>{
        const {name, value}=e.target;
        setUsuarioSeleccionado(prevState=>({
          ...prevState,
          [name]: value
        }))
        console.log(usuario);
      }

    const peticionGet=async()=>{
      await axios.get (baseUrl)
      .then(response=>{
        setData(response.data.data);
      })
    }

    const peticionPut=async()=>{
        await axios.put(baseUrl+usuario.Username, usuario)
        .then(response =>{
          var dataNueva=data;
          dataNueva.map(consola=>{
            if(usuario.Username === consola.Username){
              consola.Nombres = usuario.Nombres;
              consola.Imagen_Perfil = usuario.Imagen_Perfil;
              consola.Password = usuario.Password;
              consola.Password2 = usuario.Password2;
              consola.Usuario_activo = usuario.Usuario_activo;
              consola.Fecha = usuario.Fecha;
              consola.Rol_usuario = usuario.Rol_usuario;
            }
          })
          setData(dataNueva);
          alert("Usuario Actualizado")
          abrirCerrarModalEditar();
        })
      }
    
    const peticionDelete=async()=>{
        await axios.delete(baseUrl+usuario.Username)
        .then(response=>{
          setData(data.filter(consola=>consola.Username!==usuario.Username));
          abrirCerrarModalEliminar();
        })
      }
    

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarusuario=(consola, caso)=>{
    setUsuarioSeleccionado(consola);
    (caso=='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

    React.useEffect(async()=>{
      await peticionGet();
    },[])

    const bodyEditar=(
        <div className={styles.modal}>
          <h3>Editar Usuario</h3>
          <TextField name="Username" className={styles.inputMaterial} label="Username" onChange={handleChange} value={usuario.Username}/>
          <br />
          <TextField type="email" name="Email" className={styles.inputMaterial} label="Email" onChange={handleChange} value={usuario.Email}/>
          <br />
          <TextField name="Nombres" className={styles.inputMaterial} label="Nombres" onChange={handleChange} value={usuario.Nombres}/>
          <br />
          <TextField name="Apellidos" className={styles.inputMaterial} label="Apellidos" onChange={handleChange} value={usuario.Apellidos}/>
          <br />
          <TextField type="url" name="Imagen_Perfil" className={styles.inputMaterial} label="Imagen_Perfil" onChange={handleChange} value={usuario.Imagen_Perfil}/>
          <br />
          <TextField name="Password" className={styles.inputMaterial} label="Password" onChange={handleChange} value={usuario.Password}/>
          <TextField name="Password2" className={styles.inputMaterial} label="Confirm Password" onChange={handleChange} value={usuario.Password2}/>
          <br />
          <TextField name="Usuario_activo" className={styles.inputMaterial} label="Activo" onChange={handleChange} value={usuario.Usuario_activo}/>
          <br />
          <TextField type="date" name="Fecha" className={styles.inputMaterial} label="Fecha" onChange={handleChange} value={usuario.Fecha}/>
          <br />  
          <TextField name="Rol_usuario" className={styles.inputMaterial} label="Rol" onChange={handleChange} value={usuario.Rol_usuario}/>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )
    
      const bodyEliminar=(
        <div className={styles.modal}>
          <p>Estás seguro que deseas eliminar el Usuario <b>{usuario.Username}</b> ? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button> 
          </div>    
        </div>
      )
        return ( 

<div className="col-lg-10 col-md-9 body_block"> 
        <h3> Modificar Usuario </h3>
        <p> Bienvenido a Acme Corporation recuerde llenar muy bien los campos antes de Modificar un Usuario </p>
        <br></br>
  
            <div className="grid-item branding ">
            <GridList cellHeight={450} cols={4} >
            {
                data.length > 0 ?    
                data.map(usuario => (
        <div className="project_box_two">   
                <div className="card " >
                    <div className="card-body">    
                        <img className="card-img-top" src={usuario.Imagen_Perfil}></img>
                        <br></br>
                        <br></br>
                        <center>
                        <h3 className="card-title"><strong>{ usuario.Username }</strong></h3>
                        </center>
                        <p className="card-text"><strong>{ usuario.Email }</strong></p>
                        <p className="card-text"><strong>{ usuario.Nombres }</strong></p>
                        <p className="card-text"><strong>Fecha: </strong> <strong>{ usuario.Fecha }</strong></p>
                        <center>
                        <Button className="btn btn-primary" onClick={()=>seleccionarusuario(usuario, 'Editar')}>Editar</Button> 
                           &nbsp;&nbsp;&nbsp;
                        <Delete  className={styles.iconos} onClick={()=>seleccionarusuario(usuario, 'Eliminar')}/>
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
                    
                     ) ):(
                        <div >
                        <center>  
                            <label colSpan={3}>No Hay Usuarios</label>
                        </center>
                        </div>
             )}

          </GridList>
        </div>
            <br></br>                            
        </div>

                               

);
}
 

export default ModUsuario;

