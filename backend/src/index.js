'use strict'

const	express = require('express'),
		app = express(),
		cors = require('cors'),
		morgan = require('morgan'),
		port = (process.env.PORT || 4000)

// require('./database')

app
	.set('port', port)
	.use(cors())
	.use(express.json())
	.use('/', require('./routes/index-routes'))
	.listen(app.get('port'), () => {
		console.log(`Servidor en Puerto ${app.get('port')}`)
	})