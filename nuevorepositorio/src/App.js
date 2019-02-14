import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {listas} from './listas.json';
import Formulario from './componets/Formulario';


class App extends Component {
  constructor(){
    super();
    this.state = {listas};
    this.agregarEnvio = this.agregarEnvio.bind(this);
  }

  agregarEnvio(lista){
    this.setState({
      listas: [...this.state.listas, lista]
    })
  }

  render() {
    const listas = this.state.listas.map((lista, i) => {
      return(
        <tr>
          <td>{lista.codigo}</td>
          <td>{lista.nombre}</td>
          <td>{lista.descripcion}</td>
          <td>{lista.precio}</td>
          <td>{lista.unidades}</td>
        </tr>
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
