'use strict'

const	AWS = require('aws-sdk'),
		config = require('../database'),
		Model = () => { }

Model.getSubscriptions =  (data, cb) => {
	let usuarios = {
		name: data.name,
		phone: data.phone,
		email: data.email,
		rut: data.rut

	}
	// const idUser = (Math.random() * 1000).toString()
	const idUser = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)
	const docClient = new AWS.DynamoDB.DocumentClient()
	const params = {
		TableName: config.aws_table_name,
		Item: {
			userId: idUser,
			name: usuarios.name,
			phone: usuarios.phone,
			email: usuarios.email,
			rut: usuarios.rut
		}
	}
	docClient
		.put(params, function (err, data) {
			if (err) {
				let response = {
					success: false,
					message: 'Error: Error de Conexión'
				}
				cb(response)
			} else {
				console.log('data', data)
				const { Items } = data
				let response = {
					success: true,
					message: 'Usuario Agregado'
				}
				cb(response)
			}
	})

	// cb(usuarios)

}

Model.getLanding = (cb) => {
	AWS.config.update(config.aws_remote_config)
	const docClient = new AWS.DynamoDB.DocumentClient()
	const params = {
		TableName: config.aws_table_name
	}
	docClient.scan(params, function (err, data) {
		if (err) {
			let response = {
				success: false,
				message: 'Error: Server error'
			}

			cb(response)
		}
		else {
			console.log('data', data)
			const { Items } = data
			let response = {
				success: true,
				message: 'Loaded Users',
				Users: Items
			}
			cb(response)
		}
	})
}

module.exports = Model