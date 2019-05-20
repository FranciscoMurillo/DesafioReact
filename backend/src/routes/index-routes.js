'use strict'

const 	Controller = require('../controllers/index-controllers'),
		{ Router } = require('express'),
		router = Router()

router
	.post('/landing/subscriptions', Controller.getSubscriptions)
	.get('/landing', Controller.getLanding)
	.use(Controller.error404)


module.exports = router
