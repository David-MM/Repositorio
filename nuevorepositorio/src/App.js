import React, { Component } from 'react';
import './App.css';
import Formulario from './componets/Formulario';
import Lista from './componets/Lista';

import * as firebase from 'firebase';
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
    
    this.agregarEnvio = this.agregarEnvio.bind(this);
  }

  Leer(){
    firebase.database().ref('lista/').once('value').then((date) => {
      let ListaId = []
      const obj = date.val()
      for(let ids in obj)
      {
        ListaId.push({
          id: ids,
          codigo: obj[ids].codigo,
          nombre: obj[ids].nombre,
          descripcion: obj[ids].descripcion,
          precio: obj[ids].precio,
          unidades: obj[ids].unidades
        })
      }
      this.setState({listas: ListaId})
    })
  }

  componentDidMount() {
    this.Leer()
  }

  agregarEnvio(listas){
    firebase.database().ref('lista/').push(listas)
    this.Leer()
  }

  render() {
    const mappingDate = n =>(
      <Lista Codigo={n.codigo}
              Name={n.nombre}
              Descripcion={n.descripcion}
              Precio= {n.precio}
              Cantidad= {n.cantidad}
              Unidades= {n.unidades}
              key={n.id}/>
    )
    return (
      <div className="App">
        <h1 className="text-center cafe">Repositorio</h1>
        <Formulario onAgregar = {this.agregarEnvio}/>
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
              {this.state.listas.map(mappingDate)}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
