const router = require('express').Router()

const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')
const dashboard = require('./dashboard')

router.use('/', homeRoutes)
router.use('/dashboard', dashboard)
router.use('/api', apiRoutes)