import React from 'react';

import NavMenu from './NavMenu'
import FilterMenu from './FilterMenu'
import FormularioCliente from './FormularioCliente'
import FormularioUsuario from './FormularioUsuario'
import FormularioCarro from './FormularioCarro' 
import FormularioCompra from './FormularioCompra'
import FormularioIntermediario from './FormularioIntermediario'
import FormularioVenta from './FormularioVenta'
import Home from './home'
import TablaClientes from './TablaClientes'
import TablaUsuarios from './TablaUsuarios';
import TablaVentas from './TablaVentas'
import TablaCompras from './TablaCompras'
import Tablaintermediarios from './TablaIntermediarios'
import Carros from './Carros'
import ModCarros from './ModCarros'
import ModVenta from './ModVenta'
import ModCompra from './ModCompra'
import ModUsuario from './ModUsuario'
import ModCliente from './ModCliente'
import ModIntermediario from './ModIntermediario'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Main = () => {
    return (
        


<Router>
<Switch>


<div className="body-container container-fluid">
  <div className="row justify-content-center">
      <div className="col-lg-2 col-md-3 col-12 menu_block">
        <div className="side_menu_section">
          <NavMenu/>
        </div>       
        <FilterMenu/>
      </div>
      <div className="col-lg-10 col-md-9 col-12 body_block  align-content-center">
        <div className="img_card">
          <div className="row justify-content-center">
         
              <Route  path = "/Home">
                <br></br>
                <br></br>
                <Home/>
              </Route>
         
              <Route path = "/Personas">
                <TablaClientes/>
              </Route>
      
              <Route path = "/Usuarios">
                <TablaUsuarios/>
              </Route>

              <Route path = "/Carros">
                <Carros/>
              </Route>

              <Route path = "/Ventas">
                <TablaVentas/>
              </Route>

              <Route path = "/Compras">
                <TablaCompras/>
              </Route>

              <Route path = "/Intermediarios">
                <Tablaintermediarios/>
              </Route>

          
          
              <Route path = "/ModCarros">              
                <ModCarros/>
              </Route>

              <Route path = "/ModVenta">              
                <ModVenta/>
              </Route>
          
              <Route path = "/ModPersona">              
                <ModCliente/>
              </Route>
          
              <Route path = "/ModCompra">              
                <ModCompra/>
              </Route>
          
              <Route path = "/ModIntermediario">              
                <ModIntermediario/>
              </Route>
          
              <Route path = "/ModUsuario">              
                <ModUsuario/>
              </Route>
          

      
              <Route path = "/Agregar_persona">
                <FormularioCliente/>
              </Route>

              <Route path = "/Agregar_usuarios">
                <FormularioUsuario/>         
              </Route>

              <Route path = "/Agregar_carros">
                <FormularioCarro/>
              </Route>

              <Route path = "/Agregar_ventas">
                <FormularioVenta/>
              </Route>

              <Route path = "/Agregar_compras">
                <FormularioCompra/>          
              </Route>

              <Route path = "/Agregar_intermediarios">
                <FormularioIntermediario/>
              </Route>

        </div>  
      </div>
    </div>
  </div>

</div>
</Switch>
</Router>


    );
}
 
export default Main;