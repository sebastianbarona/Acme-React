import React, {Fragment, useState} from 'react';

const FormularioCarro = () => {
   
  const [datos, setDatos] = useState({

      Marca: '',
      Modelo: '',
      Placa: '',
      Dueño: '',
      Fechapublicacion: '',
      Precio:'',
      Imagen:'',
      Estado_Carro:'',
      Estado:''

  }) 
  
  const listener = (event) => {
     setDatos({
       ...datos,
       [event.target.name] : event.target.value
     })
  }

  const enviarDatos = (event) => {

    event.preventDefault();
    console.log(datos.Marca+' '+datos.Modelo+' '+datos.Placa+' '+datos.Dueño+' '+datos.Fechapublicacion
    +' '+datos.Precio+' '+datos.Imagen+' '+datos.Estado_Carro+' '+datos.Estado                    
    )

  }

  return (
      
<Fragment>
    <div className="content_box">
        <div className="content_box_inner">
            <div className="row justify-content-center">
              <div className="grid-item branding  col-lg-5">
                <br></br>
                <h1>Agregar Carro</h1>
                <form className = "row"  onSubmit={enviarDatos} >'csrf_token'
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Marca</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Marca" id="inputGroupSelect01">
                            <option selected>Marca...</option>
                            <option value="1">Marca1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Modelo</span>
                        <input type="text" className="form-control" onChange={listener} placeholder="Modelo" name="Modelo" aria-label="Modelo" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Placa</span>
                        <input type="text" className="form-control" onChange={listener} placeholder="Placa" name="Placa" aria-label="Placa" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Dueño</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Dueño" id="inputGroupSelect01">
                            <option selected>Dueño...</option>
                            <option value="1">Persona1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Fecha Publicacion</span>
                        <input type="date" className="form-control" onChange={listener} name="Fechapublicacion" placeholder="Fechapublicacion" aria-label="Fecha"></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Precio</span>
                        <input type="number" className="form-control" onChange={listener} name="Precio" placeholder="Precio" aria-label="Precio"></input>
                    </div>
                    <label for="basic-url" className="text-light" >Imagen Carro URL</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">https://example/users/imagen_Carro</span>
                        </div>
                        <input type="text" className="form-control" onChange={listener} name="Imagen" id="basic-url" aria-describedby="basic-addon3"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Estado Carro</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Estado_Carro" id="inputGroupSelect01">
                            <option selected>Estado Carro...</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Estado</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Estado" id="inputGroupSelect01">
                            <option selected>Estado...</option>
                            <option value="Disponible">Disponible</option>
                            <option value="Vendido">Vendido</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>  
        </div>
    </div>
</div>
         
</Fragment>


    );
}
 
export default FormularioCarro;
