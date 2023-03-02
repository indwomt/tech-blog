const sequelize = require('../config/connection')
const {Post, User, Comment} = require('../models')
const auth = require('../util/auth')

const router = require('express').Router()

// /dashboard route

router.get('/', auth, async (req, res) => {
    res.status(200).json(message,"it works")
})

module.exports = router