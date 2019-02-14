import React, { Component } from 'react';


class Formulario extends Component{
	constructor(){
    super();
    this.state = {
    	Codigo: '',
		Nombre: '',
		Descripcion: '',
		Precio: 0,
		Unidades: 0
    }
  }

	codigo(e){
		const {value, name} = e.target
		this.setState({
			[name]:value
		})
	}

	render(){
		return(
			<form className="col-md-4 inline-block para-arriba Righ">
				<h2 className="verde">Formulario</h2>
				<h3>Ingresa un Producto</h3>
			 	<div className="form-group">
					<label>Codigo</label>
					<input type="text" onChange= {this.codigo.bind(this)} name="codigo" className="form-control" id="control" placeholder="Escribe el Codigo"/>
				</div>
				<div className="form-group">
					<label>Nombre</label>
					<input type="text" onChange= {this.codigo.bind(this)} name="nombre" className="form-control" id="nombre" placeholder="Escribe el Nombre"/>
				</div>
				<div className="form-group">
					<label>Descripcion</label>
					<textarea name="descripcion" onChange= {this.codigo.bind(this)} className="form-control" id="descripcion" placeholder="Escribe una breve descripcion del producto"></textarea>
				</div>
				<div className="form-group">
					<label>Precio</label>
					<input type="Number" onChange= {this.codigo.bind(this)} name="precio" className="form-control" id="precio" placeholder="Escribe el precio"/>
				</div>
				<div className="form-group">
					<label>Unidades</label>
					<input type="Number" onChange= {this.codigo.bind(this)} name="unidades" className="form-control" id="unidades" placeholder="Escribe la cantida"/>
				</div>
				<div className="form-group text-rigth">
					<input type="submit" className="btn btn-outline-dark" id="boton" value="Guardar"/>
				</div>
			</form>
		);
	}
}

export default Formulario;