import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import clienteAxios from './config/axios';

import Usuarios from './components/Usuarios';


function App() {


 // const [usuario, guardarUsuario] = useState([]);

useEffect( () => {

  const consultarAPI = () => {

    clienteAxios.get('/usuarios/ver')
    .then(respuesta => {
      console.log(respuesta);
    })
    .catch(err => console.log(err));

  }

  consultarAPI();
}, []);

  return (
   <Router>

<Switch>

<Route

exact path = "/"
component = {Usuarios}

/>

</Switch>


   </Router> 
  );
}

export default App;
