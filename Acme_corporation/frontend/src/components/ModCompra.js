    import React, {useState} from 'react';
    import axios from 'axios';
    import {makeStyles} from '@material-ui/core/styles';
    import {Modal, Button, TextField,Select} from '@material-ui/core';
    import {Delete } from '@material-ui/icons';
    import {GridList} from '@material-ui/core';
    
    const baseUrl = 'http://127.0.0.1:8000/compras/'
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
    
const ModCompra = () => {

        const styles= useStyles();
    
        const [data, setData]=useState([]);
        const [carros, setData1]=useState([]);
        const [personas, setData2]=useState([]);
        const [usuarios, setData3]=useState([]);
    
        const [modalEditar, setModalEditar]=useState(false);
        const [modalEliminar, setModalEliminar]=useState(false);
        
        const [compra, setCompraSeleccionada]=useState({
           
            Id_compra: parseInt(''),
            Placa: '',
            Vendedor: '',
            Comprador: '',
            Fecha: '',
            Precio: parseInt('')
        
          })
        
        const handleChange=e=>{
            const {name, value}=e.target;
            setCompraSeleccionada(prevState=>({
              ...prevState,
              [name]: value
            }))
            console.log(compra);
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
            await axios.put(baseUrl+compra.Id_compra, compra)
            .then(response =>{
              var dataNueva=data;
              dataNueva.map(consola=>{
                if(compra.Id_compra === consola.Id_compra){
                  consola.Placa = compra.Placa;
                  consola.Vendedor = compra.Vendedor;
                  consola.Comprador = compra.Comprador;
                  consola.Fecha = compra.Fecha;
                  consola.Precio = compra.Precio;
                }
              })
              setData(dataNueva);
              alert("Compra Actualizada")
              abrirCerrarModalEditar();
            })
          }
        
        const peticionDelete=async()=>{
            await axios.delete(baseUrl+compra.Id_compra)
            .then(response=>{
              setData(data.filter(consola=>consola.Id_compra!==compra.Id_compra));
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
        setCompraSeleccionada(consola);
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
              <TextField name="Id_compra" className={styles.inputMaterial} label="ID" onChange={handleChange} value={compra.Id_compra}/>
              <br />
              <Select name="Placa" className={styles.inputMaterial} label="Placa" onChange={handleChange} value={compra.Placa}>
                        {carros.map(elemento=>(
                            <option key={elemento.Placa} value={elemento.Placa}>{elemento.Placa}</option> 
                                ))}
              </Select>
              <br />
              <Select name="Vendedor" className={styles.inputMaterial} label="Vendedor" onChange={handleChange} value={compra.Vendedor}>
              {personas.map(elemento=>(
              <option key={elemento.Cedula} value={elemento.Cedula}>{elemento.Cedula}</option>
                                ))}
                </Select>
              <br />
              <Select name="Comprador" className={styles.inputMaterial} label="Empleado" onChange={handleChange} value={compra.Comprador}>
              {usuarios.map(elemento=>(
              <option key={elemento.Username} value={elemento.Username}>{elemento.Username}</option>
                                ))}
              </Select>
              <br />
              <TextField type="date" name="Fecha" className={styles.inputMaterial} label="Fecha" onChange={handleChange} value={compra.Fecha}/>
              <br />
              <TextField name="Precio" className={styles.inputMaterial} label="Precio" onChange={handleChange} value={compra.Precio}/>
              <br /><br />
              <div align="right">
                <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
                <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
              </div>
            </div>
          )
        
          const bodyEliminar=(
            <div className={styles.modal}>
              <p>Estás seguro que deseas eliminar la Compra <b>{compra.Id_compra}</b> ? </p>
              <div align="right">
                <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
                <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button> 
              </div>    
            </div>
          )
        
    return (

<div className="col-lg-10 col-md-9 body_block">
    <div> 
        <h3> Modificar Compra </h3>
        <p> Bienvenido a Acme Corporation recuerde llenar muy bien los campos antes de Modificar una Compra </p>
        <br></br>
    </div>

    
    <div className="grid-item branding ">
            <GridList cellHeight={450} cols={4} >
            {
                        data.length > 0 ?    
                        data.map(compra => (
              <div className="project_box_two">
                <div className="card ">
                    <div className="card-body">    
                        <h5 className="card-title"><strong>{compra.Id_compra} </strong></h5>
                        <p className="card-text"><strong>{compra.Placa} </strong></p>
                        <p className="card-text"><strong>Vendedor :</strong><strong >{compra.Vendedor} </strong> </p>
                        <p className="card-text"><strong>Comprador:</strong><strong >{compra.Comprador} </strong></p>
                        <p className="card-text"><strong>Fecha :</strong> <strong >{compra.Fecha} </strong></p>
                        <p className="card-text"><strong>Precio :</strong> <strong >{compra.Precio} </strong></p>
                        <center>
                        <Button className="btn btn-primary"  onClick={()=>seleccionarventa(compra, 'Editar')}>Modificar</Button> 
                           &nbsp;&nbsp;&nbsp;
                        <Delete  className={styles.iconos} onClick={()=>seleccionarventa(compra, 'Eliminar')}/>
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
                <label colSpan={3}>No Hay Compras</label>
            </center>
            </div>
                )}
          </GridList>
            </div>
        </div>
                 

);
}
 

export default ModCompra;

