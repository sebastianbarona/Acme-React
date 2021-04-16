import React, {Fragment, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/ventas/'
const baseunoUrl = 'http://127.0.0.1:8000/carros/'
const basetresUrl = 'http://127.0.0.1:8000/personas/'
const basecuatroUrl = 'http://127.0.0.1:8000/usuarios/'


const FormularioVenta = () => {
   
    const [data, setData]=useState([]);
    const [carros, setData1]=useState([]);
    const [personas, setData3]=useState([]);
    const [usuarios, setData4]=useState([]);
    

    const [venta, setVentaSeleccionada] = useState({
  
        Id_venta: '',
        Placa:'',
        Vendedor: '',
        Comprador: '',
        Fecha:'',
        Precio:''
  
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
        await axios.get (basetresUrl)
        .then(response=>{
            setData3(response.data.data);
        })
      }
    
    const peticionGetusuarios=async()=>{
        await axios.get (basecuatroUrl)
        .then(response=>{
            setData4(response.data.data);
        })
      }
    
    const peticionPost=async()=>{
      await axios.post(baseUrl, venta)
      .then(response=>{
        setData(data.concat(response.data))
        alert("Venta Creada")
      
    })
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

  return (
      
<Fragment>
              
<div className="content_box">
    <div className="content_box_inner">   
        <div className="row justify-content-center">
            <div className="grid-item branding  col-lg-5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Agregar Venta</h1>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Placa</label>
                        </div>
                        <select className="custom-select" onChange={handleChange} name="Placa" id="inputGroupSelect01">
                        <option></option> 
                            {carros.map(elemento=>(
                        <option key={elemento.Placa} value={elemento.Placa}>{elemento.Placa}</option> 
                            ))}
                     </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Vendedor</label>
                        </div>
                        <select className="custom-select" onChange={handleChange} name="Vendedor" >
                        <option></option> 
                            {usuarios.map(elemento=>(
                        <option key={elemento.Username} value={elemento.Username}>{elemento.Username}</option> 
                            ))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Cliente</label>
                        </div>
                        <select className="custom-select" onChange={handleChange} name="Comprador" >
                        <option></option> 
                            {personas.map(elemento=>(
                        <option key={elemento.Cedula} value={elemento.Cedula}>{elemento.Cedula}</option> 
                            ))}
                       
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Fecha</span>
                        <input type="date" className="form-control" onChange={handleChange} name="Fecha" placeholder="Fecha"></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Precio</span>
                        <input type="number" className="form-control" onChange={handleChange} name="Precio" placeholder="Precio" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <button type="submit" className="btn btn-primary" onClick={()=>peticionPost()}>Guardar</button>
                    </div>
            </div>  
        </div>
    </div>
</div>

</Fragment>


    );
}
 
export default FormularioVenta;
