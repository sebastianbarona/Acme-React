import {NavLink} from 'react-router-dom';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCar,faUserFriends,faUser,faHome,faShoppingCart,faMoneyCheck,faBook} from '@fortawesome/free-solid-svg-icons'

const NavMenu = () => {
    return ( 
              
        <div className="side_menu_section animation-container animation-fade-down" data-animation-delay="300">      
  
  <center>
            <div className="animation-container animation-fade-left" data-animation-delay="0">     
                <div className="cc-profile-image">
                    <a href="#">
                        <img src="https://scontent.fclo1-1.fna.fbcdn.net/v/t1.0-9/158102831_3920299611353864_862414796055326428_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGOx_qq8SrJLOI9tI_CnjledFfctoOb3Mh0V9y2g5vcyD-7xtiVA_FzE6U5dODHM9_3CQMj9CPDOx5qLHT7EUQp&_nc_ohc=HZ05t2Phm7sAX8elNiu&_nc_ht=scontent.fclo1-1.fna&oh=a5e0477345bdba13e95574d3f451e3cc&oe=606A4333" alt="Image" />
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
                        <br></br> Home </a>
                    
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
