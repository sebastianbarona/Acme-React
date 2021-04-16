import React, {useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/usuarios/'

const Login = () => {
    const [data, setData]=useState([]);
    const [usuario, setUsuarioSeleccionado]=useState({
      Username: '',
      Password: '',
    })

  const peticionGet=async()=>{
      await axios.get (baseUrl)
      .then(response=>{
        setData(response.data.data);
      })
    }
  
  const peticionverificar=async()=>{
        var dataNueva=data;
        var verificador=false;
        var User ='';
        var Contraseña = '';
     
        dataNueva.map(consola=>{
          if (usuario.Username == consola.Username && usuario.Password === consola.Password){
            verificador=true
            }})
          if(verificador===true){
            User = usuario.Username
            Contraseña = usuario.Password
            window.location = '/home';
            }else{
                alert("Usuario o Contraseña Incorrecta")
              }}

  React.useEffect(async()=>{
      await peticionGet();
    },[])

  const handleChange=e=>{
      const {name, value}=e.target;
      setUsuarioSeleccionado(prevState=>({
        ...prevState,
        [name]: value
      }))
      console.log(usuario);
    }

  return ( 

<body className="body2">
        <div className="login-page justify-content-center">
                <div className="form">
             <h3>Log in</h3>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="text-light" >Usuario</label>
                    <input type="text" className="form-control" name="Username" onChange={handleChange} placeholder="Ingresa el Usuario"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="text-light" >Password</label>
                    <input type="password" className="form-control" onChange={handleChange} name="Password" placeholder="Password"></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" ></input>
                    <label className="form-check-label text-light" for="exampleCheck1" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>peticionverificar()} >LOGIN</button>
                </div>
            <br></br>
            <br></br>
            <br></br>            
            <br></br>
        </div>
</body>
     );
}
 
export default Login;

