import React, { Component } from 'react';
import {listas} from './listas.json';

class Seccion extends Component{
	constructor(){
    super();
    this.state = {listas}
  }
	render(){
		const listas = this.state.listas.map((lista, i) => {
			return(
				<tr>
					<td>{lista.Codigo}</td>
					<td>{lista.Nombre}</td>
					<td>{lista.Descripcion}</td>
					<td>{lista.Precio}</td>
					<td>{lista.Unidades}</td>
				</tr>
			)
		})

		return(
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
		);
	}
}

export default Seccion;
