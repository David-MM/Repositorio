import React, { Component } from 'react';
import './App.css';
import Formulario from './componets/Formulario';
import Lista from './componets/Lista';

import firebase from 'firebase';
// import 'firebase/datebase';

const DB = { 
  apiKey: "AIzaSyDmG00HeNS7xM2_5lDROsKmy8RiLhSAjVw",
    authDomain: "repositorio-13597.firebaseapp.com",
    databaseURL: "https://repositorio-13597.firebaseio.com",
    projectId: "repositorio-13597",
    storageBucket: "repositorio-13597.appspot.com",
    messagingSenderId: "107911171812"
}
firebase.initializeApp(DB)

class App extends Component {
  constructor(){
    super();
    this.state = {
      listas: []
    };
    this.conect = firebase.datebase().ref().child('listas');
    this.agregarEnvio = this.agregarEnvio.bind(this);
  }

  componentDidMount() {
    const listas  = this.state.listas;
    
    this.conect.on('child_added', (snap) => {
        listas.push({
          codigo: snap.key,
          nombre: snap.val().nombre
        })
        this.setState({ listas });
      })
  }

  agregarEnvio(listas){
    this.conect.push().set(listas);
  }

  render() {
    const listas = this.state.listas.map((listas) => {
      return(
        <Lista Codigo={listas.codigo}
                Name={listas.nombre}
                Descripcion={listas.descripcion}
                Precio= {listas.precio}
                Cantidad= {listas.cantidad}
                key={listas.length}/>
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
