import React, {Fragment, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/carros/'
const basedosUrl = 'http://127.0.0.1:8000/marcas/'
const basetresUrl = 'http://127.0.0.1:8000/personas/'

const FormularioCarro = () => {
   
  const [data, setData]=useState([]);
  const [datados, setData2]=useState([]);
  const [datatres, setData3]=useState([]);
  const [carros, setCarroSeleccionado] = useState({

      Marca: parseInt(''),
      Modelo: '',
      Placa: '',
      Dueño: '',
      Fechapublicacion: '',
      Precio: parseInt(''),
      Imagen:'',
      Estado_Carro:'',
      Estado:''

  }) 

  const handleChange=e=>{
    const {name, value}=e.target;
    setCarroSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }))
  }

  const peticionGet =async()=>{
    await axios.get (basedosUrl)
    .then(response=>{
        setData(response.data.data);
    })
  }

  const peticionGetmarcas =async()=>{
    await axios.get (basedosUrl)
    .then(response=>{
        setData2(response.data.data);
    })
  }

  const peticionGetpersonas=async()=>{
    await axios.get (basetresUrl)
    .then(response=>{
        setData3(response.data.data);
    })
  }

  console.log(carros);

  React.useEffect(async()=>{
    await peticionGetmarcas();
  },[])

  React.useEffect(async()=>{
    await peticionGet();
  },[])

  React.useEffect(async()=>{
    await peticionGetpersonas();
  },[])

  const peticionPost=async()=>{
    await axios.post(baseUrl, carros)
    .then(response=>{
      setData(data.concat(response.data))
      alert("Carro Creado")
    })
  }

  return (
      
<Fragment>
    <div className="content_box">
        <div className="content_box_inner">
            <div className="row justify-content-center">
              <div className="grid-item branding  col-lg-5">
                <br></br>
                <h1>Agregar Carro</h1>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Marca</label>
                        </div>            
                        <select className="custom-select" onChange={handleChange} name="Marca">
                        <option></option> 
                            {datados.map(elemento=>(
                        <option key={elemento.Id_Marca} value={elemento.Id_Marca}>{elemento.Nombre}</option> 
                            ))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Modelo</span>
                        <input type="text" className="form-control" onChange={handleChange} placeholder="Modelo" name="Modelo" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Placa</span>
                        <input type="text" className="form-control" onChange={handleChange} placeholder="Placa" name="Placa" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Dueño</label>
                        </div>
                        <select className="custom-select" onChange={handleChange} name="Dueño" >
                        <option></option>
                        {datatres.map(elemento=>(
                               <option key={elemento.Cedula} value={elemento.Cedula}>{elemento.Nombres}</option> 
                            ))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Fecha Publicacion</span>
                        <input type="date" className="form-control" onChange={handleChange} name="Fechapublicacion" placeholder="Fechapublicacion" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Precio</span>
                        <input type="number" className="form-control" onChange={handleChange} name="Precio" placeholder="Precio" ></input>
                    </div>
                    <label for="basic-url" className="text-light" >Imagen Carro URL</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >https://example/users/imagen_Carro</span>
                        </div>
                        <input type="text" className="form-control" onChange={handleChange} name="Imagen" id="basic-url" ></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Estado Carro</label>
                        </div>
                        <select className="custom-select" onChange={handleChange}  name="Estado_Carro" >
                            <option selected>Estado Carro...</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Estado</label>
                        </div>
                        <select className="custom-select" onChange={handleChange}  name="Estado" >
                            <option selected>Estado...</option>
                            <option value="Disponible">Disponible</option>
                            <option value="Vendido">Vendido</option>
                        </select>
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
 
export default FormularioCarro;
