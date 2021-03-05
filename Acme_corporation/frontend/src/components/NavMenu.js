import {NavLink} from 'react-router-dom';

const NavMenu = () => {
    return ( 

        
        <div className="side_menu_section">

        <ul className="menu_nav">

            <NavLink to="/Home">
            <li>
                <a href="/Home">
                    Home
                </a>
            </li>
            </NavLink>

            <NavLink to="/Usuarios">
            <li >
                <a href="/Usuarios">
                    Usuarios
                </a>
            </li>
            </NavLink>

            <NavLink to="/Personas">

            <li>
                <a href="/Personas">
                    Clientes
                </a>
            </li>

            </NavLink>

            <NavLink to="/Carros">

            <li>
                <a href="/Carros">
                    Carros
                </a>
            </li>

            </NavLink>

            <NavLink to="/Ventas">            

            <li>
                <a href="/Ventas">
                    Ventas
                </a>
            </li>

            </NavLink>

            <NavLink to="/Compras">
            <li>
                <a href="/Compras ">
                    Compra
                </a>
            </li>

            </NavLink>

            <NavLink to="/Intermediarios">

            <li>
                <a href="/Intermediarios">
                    Intermediario
                </a>
            </li>

            </NavLink>

         </ul>
    </div>       
    
     );

}
 

export default NavMenu;
