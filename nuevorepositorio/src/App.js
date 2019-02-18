import React, { Component } from 'react';
import './App.css';
import Formulario from './componets/Formulario';
import Lista from './componets/Lista';
import firebase from 'firebase';
import from 'firebase/datebase';
import {DB} from './config/config';


class App extends Component {
  constructor(){
    super();
    this.state = {
      listas[

      ]
    };
    this.agregarEnvio = this.agregarEnvio.bind(this);
  }

  agregarEnvio(lista){
    this.setState({
      listas: [...this.state.listas, lista]
    })
  }

  render() {
    const listas = this.state.listas.map((lista) => {
      return(
        <Lista Codigo={lista.codigo}
                Name={lista.nombre}
                Descripcion={lista.descripcion}
                Precio= {lista.precio}
                Cantidad= {lista.cantidad}
                key={lista.length}/>
      )
    })
    return (
      <div className="App">
        <h1 className="text-center cafe">Repositorio</h1>
        <Formulario onAgregar = {this.agregarEnvio} />
        <section className="col-md-8 inline-block Righ vete-arriba">
          <h2 className="verde">Lista</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Unidades</th>
              </tr>
            </thead>
            <tbody>
              {listas}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
