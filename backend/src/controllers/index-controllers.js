'use strict'

var Model = require('../models/index-models'),
	Controller = () => { }

Controller.getSubscriptions = (req, res, next) => {
	let user = {
		name: req.body.dataclient.name,
		phone: req.body.dataclient.phone,
		email: req.body.dataclient.email,
		rut: req.body.dataclient.rut
	}
	console.log(user)
	Model.getSubscriptions(user, (docs) => {
		let locals = docs
		res.json(locals)
	})
}

Controller.getLanding = (req, res, next) => {
	Model.getLanding((docs) => {
		let locals = docs
		res.send(locals)
	})
}

Controller.error404 = (req, res, next) => {
	let error = new Error(),
		locals = {
			title: 'Error 404',
			description: 'Recurso No Encontrado',
			error: error
		}

	error.status = 404
	res.send('NO Exite..')

	next()
}
module.exports = Controller