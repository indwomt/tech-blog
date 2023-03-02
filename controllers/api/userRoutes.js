const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')


// Getting data for ALL users, just their user info
router.get('/', async (req,res) =>{
    const allUsers = await User.findAll({
        // We do not want the API to be able to grab the password value
        attributes: {exclude:'password'}
    })
    res.json(allUsers)
})


// /api/users/id endpoint 
router.get('/:id', async (req,res) =>{
    const singleUser = await User.findOne({
        attributes:{exclude:'password'},
    where: {
        id:req.params.id
    },
include: [
    {
        model: Post,
        attributes:['id', 'post-title', 'post-content', 'user_id']
    },
    {
        model: Comment,
        attributes:['id','comment_content','user_id','post_id'],
        include: {
            model: Post,
            attributes: ['id','post-title']
        }
    }

]} 

)
res.status(200).json(singleUser)})

module.exports = router

// /api/users

