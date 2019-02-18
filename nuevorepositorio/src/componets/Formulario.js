import React, { Component } from 'react';


class Formulario extends Component{
	constructor(){
    super();
    this.state = {
    	codigo: '',
		nombre: '',
		descripcion: '',
		precio: '',
		unidades: ''
    };
    this.Imputchange = this.Imputchange.bind(this);
    this.Enviar = this.Enviar.bind(this);
  }

	Imputchange(e){
		const {value, name} = e.target
		this.setState({
			[name]:value
		})
	}

	Enviar(e){
		e.preventDefault();
		if(this.codigo.value.length !== 0 && this.nombre.value.length !== 0 && this.descripcion.value.length !== 0 && this.precio.value.length !== 0 && this.unidades.value.length !== 0)
		{
			this.props.onAgregar(this.state);
			this.codigo.value = '';
			this.nombre.value = '';
			this.descripcion.value = '';
			this.precio.value = '';
			this.unidades.value = '';
		}
		else
		{
			alert("Rellena todos los campos");
		}
		
	}

	render(){
		return(
			<form className="col-md-4 inline-block para-arriba Righ"  onSubmit={this.Enviar}>
				<h2 className="verde">Formulario</h2>
				<h3>Ingresa un Producto</h3>
			 	<div className="form-group">
					<label>Codigo</label>
					<input type="text" onChange= {this.Imputchange} name="codigo" className="form-control" ref={imput =>{this.codigo = imput;}} placeholder="Escribe el Codigo"/>
				</div>
				<div className="form-group">
					<label>Nombre</label>
					<input type="text" onChange= {this.Imputchange} name="nombre" className="form-control" ref={imput =>{this.nombre = imput;}} placeholder="Escribe el Nombre"/>
				</div>
				<div className="form-group">
					<label>Descripcion</label>
					<textarea name="descripcion" onChange= {this.Imputchange} className="form-control" ref={imput =>{this.descripcion = imput;}} placeholder="Escribe una breve descripcion del producto"></textarea>
				</div>
				<div className="form-group">
					<label>Precio</label>
					<input type="Number" onChange= {this.Imputchange} name="precio" className="form-control" ref={imput =>{this.precio = imput;}} placeholder="Escribe el precio"/>
				</div>
				<div className="form-group">
					<label>Unidades</label>
					<input type="Number" onChange= {this.Imputchange} name="unidades" className="form-control" ref={imput =>{this.unidades = imput;}} placeholder="Escribe la cantida"/>
				</div>
				<div className="form-group text-rigth">
					<input type="submit" className="btn btn-outline-dark" id="boton" value="Guardar"/>
				</div>
			</form>
		);
	}
}

export default Formulario;