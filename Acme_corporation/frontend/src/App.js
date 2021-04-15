import React from 'react';
import Login from './components/Login'
import Main from './components/main'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {  
  
  return (
    
<Router>
<Switch>

<Route  path="/Login" component={Login}/>
<Route  path="/Home" component={Main}/>   
<Route  path="/" component={Main}/> 


</Switch>
</Router>


     
   );

  }

export default App;
