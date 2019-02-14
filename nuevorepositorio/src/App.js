import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Formulario from './componets/Formulario';
import Seccion from './componets/Seccion';


class App extends Component {
  render() {

    return (
      <div className="App">
        <h1 className="text-center cafe">Repositorio</h1>
        <Formulario/><Seccion/>

      </div>
    );
  }
}

export default App;
