import React, {Fragment, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/intermediarios/'
const baseunoUrl = 'http://127.0.0.1:8000/carros/'
const basetresUrl = 'http://127.0.0.1:8000/personas/'
const basecuatroUrl = 'http://127.0.0.1:8000/usuarios/'

const FormularioIntermediario = () => {
   
    const [data, setData]=useState([]);
    const [carros, setData1]=useState([]);
    const [personas, setData3]=useState([]);
    const [usuarios, setData4]=useState([]);
    
    const [intermediada, setIntermediarioSeleccionada] = useState({
  
        Id_intermediario: '',
        Intermediario: '',  
        Placa: '',
        Comprador: '',
        Dueno: '',
        Fecha:'',
        Precio:''  

    }) 
  
    const handleChange=e=>{
      const {name, value}=e.target;
      setIntermediarioSeleccionada(prevState=>({
        ...prevState,
        [name]: value
      }))
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
      await axios.post(baseUrl, intermediada)
      .then(response=>{
        setData(data.concat(response.data))
        alert("Venta Intermediada Creada")
      
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
                <h1>Agregar Intermediario</h1>
                <form className = "row" >
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Intermediario</label>
                        </div>
                        <select className="custom-select" onChange={handleChange} name="Intermediario" >
                            <option></option> 
                            {usuarios.map(elemento=>(
                            <option key={elemento.Username} value={elemento.Username}>{elemento.Username}</option> 
                            ))}
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Comprador</label>
                        </div>
                        <select className="custom-select" onChange={handleChange} name="Comprador" >
                        <option></option> 
                        {personas.map(elemento=>(
                        <option key={elemento.Cedula} value={elemento.Cedula}>{elemento.Cedula}</option> 
                            ))}
                        </select>
                    </div>
               
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Placa</label>
                    </div>
                    <select className="custom-select" onChange={handleChange} name="Placa" >
                    <option/>
                    {carros.map(elemento=>(    
                    <option key={elemento.Placa} value={elemento.Placa}>{elemento.Placa}</option> 
                    ))}
                    </select>
                    </div>

                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Dueño</label>
                    </div>
                    <select className="custom-select" onChange={handleChange} name="Dueno" >
                    <option/>
                    {carros.map(elemento=>(    
                    <option  key={elemento.Dueño} value={elemento.Dueño}>{elemento.Dueño}</option>    
                    ))}
                    </select>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" >Fecha</span>
                        <input type="date" className="form-control" onChange={handleChange} name="Fecha" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Precio</span>
                        <input type="number" className="form-control" onChange={handleChange} name="Precio" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <button type="submit" className="btn btn-primary" onClick={()=>peticionPost()} >Guardar</button>
                    </div>
                </form>
            </div>  
        </div>
    </div>
</div>
          
</Fragment>

    );
}
 
export default FormularioIntermediario;
