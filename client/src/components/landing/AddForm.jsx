import React from 'react'

const AddForm = ( props ) => (
	<div className="container row">
	<div className="col s12">
		<h1 className="center-align">Cursos de <br /> Verano +NEM </h1>
		<p className="center-align">No dejes pasar esta increíble oportunidad. Inscríbete acá</p>
	</div>
		<form className="row " onSubmit={props.onAddData}>
			<div className="col s11 l5">
				<label >Nombre <span className="font-red">*</span></label>
				<input id="name" className="validate" type="text" placeholder="ej. Jose Canseco" name="name" />
			</div>
			<div className="col s11 l5 rig">
				<label >Teléfono <span className="font-red">*</span></label>
				<input className="validate" type="number" placeholder="ej. +569 3772 9376" name="phone"  />
			</div>
			<div className="col s11 l5 ">
				<label >Correo <span className="font-red">*</span></label>
				<input className="validate" type="email" placeholder="ej. correo@gmai.com" name="email"  />
			</div>
			<div className="col s11 l5 rig">
				<label >RUT <span className="font-red">*</span></label>
				<input className="validate" type="text" placeholder="ej. 26.492.283-1" name="rut"  />
			</div>
			<div>
			<input className="col s12 waves-effect waves-light btn btn-submit" type="submit" value="Inscribirse" />
			</div>
		</form>
	</div>
)
		
export default AddForm