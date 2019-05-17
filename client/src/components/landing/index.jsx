import React, { Component } from 'react'
import AddFrom from './AddForm'
import axios from 'axios'
import logoReact from './logo.png'

class App extends Component {
	constructor(...props){
		super(...props)

		this.state = {
			data: [
				{ name:'', phone:'', email: '', rut: '' }
			]
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.setMessage = this.setMessage.bind(this)
	}
	setMessage(err) {
		return { loginMessage: err }
	}
	handleSubmit(e) {
		e.preventDefault()
		let form = e.target
		let nombre, telefono, email, rut
		nombre = form.name.value
		telefono = form.phone.value
		email = form.email.value
		rut = form.rut.value

		if 	(telefono.trim().length > 12){
			alert('El Número de telefono solo debe tener 9 números.')
		}
		else if(email.length > 40 ){
			alert('El Correo excede los carácteres permitidos.')
		}else if(rut.length > 9){	
			alert('El RUT solo debe contener 9 números sin puntos y guion.')
		} else if (nombre === "" || telefono === "" || email === "" || rut === "" ){
			alert('Todos los Campos son Obligatorios.')
		}
		else{

			let dataclient = {
				name: form.name.value,
				phone: form.phone.value,
				email: form.email.value,
				rut: form.rut.value
			}

			axios.post(`http://localhost:4000/landing/subscriptions`, { dataclient })
				.then(res => {
					console.log(res)
					console.log(res.data)
					this.setState(this.setMessage(`Se Registro con éxito !`))
				})
				.catch(err => this.setState(this.setMessage(`No se realizo el Registro intente de nuevo !`)))

			form.reset()

			
		}

	}

	render() {
		return(
			<div>
			<header className="container-fluid white">
				<div className="container col s12 ">
					<a href="/"><img className="react-logo " src={logoReact} alt="React" /></a>
				</div>
			</header>
			<AddFrom  onAddData={this.handleSubmit}  />
				<div className="container col s12 u-error">
					{this.state.loginMessage}
				</div>
			</div>
		)
	}
}


export default App

