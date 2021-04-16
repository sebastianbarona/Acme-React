import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCar,faUserFriends,faUser,faHome,faShoppingCart,faMoneyCheck,faBook} from '@fortawesome/free-solid-svg-icons'
import Login from './Login';


const UsuariosFiltrados = 'http://127.0.0.1:8000/usuarios/'

const NavMenu = () => {

    const [data, setData]=useState([]);

    const [usuario, setUsuarioSeleccionado]=useState({
        Username: '',
        Password: '',
  
      })
    console.log(usuario.Username)

    const peticionGet=async()=>{
      await axios.get (UsuariosFiltrados)
      .then(response=>{
        setData(response.data.data);
      })
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setUsuarioSeleccionado(prevState=>({
          ...prevState,
          [name]: value
        }))
        console.log(usuario);
      }



    React.useEffect(async()=>{
      await peticionGet();
    },[])

    
    return ( 


<div className="side_menu_section animation-container animation-fade-down" data-animation-delay="300">        
  <center>
    <div className="animation-container animation-fade-left" data-animation-delay="0">     
        <div className="cc-profile-image">
            <a href="#">
                <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="Image" />
            </a>
        </div>      
            </div>
            <h3>Username</h3>
        </center>
            <ul className="menu_nav ">
                <NavLink to="/Home">
                    <li>
                        <a href="/Home">
                        <FontAwesomeIcon icon={faHome} style={{fontSize:"2em",color:"palegoldenrod"}}/>{""}
                        <br></br> Home 
                        </a>
                    
                    </li>
                </NavLink>

                <NavLink to="/Usuarios">
                    <li> 
                        <a href="/Usuarios">
                        <FontAwesomeIcon icon={faUser} style={{fontSize:"2em",color:"palegoldenrod"}}/>{""}
                        <br></br> Usuario </a>
                     
                    </li>
                </NavLink>

                <NavLink to="/Personas">
                    <li>
                        <a href="/Personas">
                        <FontAwesomeIcon icon={faUserFriends} style={{fontSize:"2em",color:"palegoldenrod"}}/>{""}
                        <br></br> Cliente </a>
                    </li>

                </NavLink>
       
                <NavLink to="/Carros">
                    <li>
                        <a href="/Carros">
                        <FontAwesomeIcon icon={faCar} style={{fontSize:"2em",color:"palegoldenrod"}}/>{""}
                        <br></br> Carros </a>
                    </li>
                </NavLink>

                <NavLink to="/Ventas">            
                    <li>
                        <a href="/Ventas"> <FontAwesomeIcon icon={faBook} style={{fontSize:"2em",color:"palegoldenrod"}}/>{""}
                        <br></br> Ventas </a>
                    </li>

                </NavLink>

                <NavLink to="/Compras">
                    <li>
                        <a href="/Compras "><FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"2em",color:"palegoldenrod"}}/>{""}
                <br></br>     Compra</a>
                    </li>
                </NavLink>

                <NavLink to="/Intermediarios">
                    <li>
                        <a href="/Intermediarios"> <FontAwesomeIcon icon={faMoneyCheck} style={{fontSize:"2em",color:"palegoldenrod"}}/>{""}
                 <br></br>   Intermediado </a>
                    </li>
                </NavLink>

            </ul>
        </div>       
    
     );

}
 

export default NavMenu;
