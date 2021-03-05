import React, {Fragment, useState} from 'react';

const FormularioCompra = () => {
   
  const [datos, setDatos] = useState({

      Placa: '',
      Vendedor: '',
      Comprador: '',
      Fecha:'',
      Precio:''
    }) 
  
  const listener = (event) => {
     setDatos({
       ...datos,
       [event.target.name] : event.target.value
     })
  }

  const enviarDatos = (event) => {

    event.preventDefault();
    console.log(datos.Placa+' '+datos.Vendedor+' '+datos.Comprador+' '+datos.Fecha+' '+datos.Precio)

  }

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
                <h1>Agregar Compra</h1>
                <form className = "row"  onSubmit={enviarDatos} >'csrf_token'
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Placa</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Placa" id="inputGroupSelect01">
                            <option selected>Placa...</option>
                            <option value="Placa1">Placa1</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Vendedor</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Vendedor" id="inputGroupSelect01">
                            <option selected>Cliente...</option>
                            <option value="Cliente1">Cliente1</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Empleado</label>
                        </div>
                        <select className="custom-select" onChange={listener} name="Comprador" id="inputGroupSelect01">
                            <option selected>Empleado...</option>
                            <option value="Empleado1">Empleado1</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Fecha</span>
                        <input type="date" className="form-control" onChange={listener} name="Fecha" placeholder="Fecha" aria-label="Fecha"></input>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Precio</span>
                        <input type="number" className="form-control" onChange={listener} name="Precio" placeholder="Precio" aria-label="Precio"></input>
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
 
export default FormularioCompra;
