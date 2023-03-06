import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Funcionarios from './pages/Funcionarios/index'


function Routes() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Home} />

      <Route path="/cadastro" component={Form} />
      <Route path="/Home" component={Home} />
      <Route path="/Pesquisa" component={Funcionarios} />
      
   
    </BrowserRouter>
  );
}

export default Routes;