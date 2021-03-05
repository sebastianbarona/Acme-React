import React from 'react';
import NavMenu from './components/NavMenu'
import FilterMenu from './components/FilterMenu'
import Perfil from './components/Perfil'
import FormularioCliente from './components/FormularioCliente'
import FormularioUsuario from './components/FormularioUsuario'
import FormularioCarro from './components/FormularioCarro' 
import FormularioCompra from './components/FormularioCompra'
import FormularioIntermediario from './components/FormularioIntermediario'
import FormularioVenta from './components/FormularioVenta'
import Home from './components/home'
import TablaClientes from './components/TablaClientes'
import TablaUsuarios from './components/TablaUsuarios';
import TablaVentas from './components/TablaVentas'
import TablaCompras from './components/TablaCompras'
import Tablaintermediarios from './components/TablaIntermediarios'
import Carros from './components/Carros'
import ModCarros from './components/ModCarros'
import ModVenta from './components/ModVenta'
import ModCompra from './components/ModCompra'
import ModUsuario from './components/ModUsuario'
import ModCliente from './components/ModCliente'
import ModIntermediario from './components/ModIntermediario'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {  
  
  return (
    
    
<div className="body-container container-fluid">
<Router>
<Switch>

  

  <div className="row justify-content-center">
      <div className="col-lg-2 col-md-3 col-12 menu_block">

        <center>
          <Perfil/>
        </center>
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
</Switch>
</Router>

</div>

     
   );

  }

export default App;
