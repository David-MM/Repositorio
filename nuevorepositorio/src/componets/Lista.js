import React, { Component } from 'react';

class Lista extends Component{
	render(){
		return(
			<tr>
          		<td>{this.props.Codigo}</td>
				<td>{this.props.Name}</td>
				<td>{this.props.Descripcion}</td>
				<td>{this.props.Precio}</td>
				<td>{this.props.Unidades}</td>
        	</tr>
		)
	}
}

export default Lista;