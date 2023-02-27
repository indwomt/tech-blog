const sequelize = require('../config/connection')
const {Post, User, Comment} = require('../models')
const auth = require('../util/auth')

const router = require('express').Router()

// /dashboard route

router.get('/', auth, async (req, res) => {
    const postData = await Post.findAll({
        //  FIND LOGGED IN USER's ID THROUGH SESSION STORAGE
    where: {
        
    }
    })
})
