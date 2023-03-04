const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')
const bycrpt = require('bcrypt')

// WORKS
// Getting data for ALL users, just their user info
router.get('/', async (req,res) =>{
    const allUsers = await User.findAll({
        // We do not want the API to be able to grab the password value
        attributes: {exclude:'password'}
    })
    res.json(allUsers)
})

// WORKS
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
        attributes:['id', 'post_title', 'post_content', 'user_id']
    },
    {
        model: Comment,
        attributes:['id','comment_content','user_id','post_id'],
        include: {
            model: Post,
            attributes: ['id','post_title']
        }
    }

]} 

)
res.status(200).json(singleUser)})



// WORKS
router.post(`/`, async (req, res) => {
    try {
     const dbUser = await  User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
     })
     req.session.save( () => {
 
         req.session.user_id = dbUser.id;
         req.session.name = dbUser.name;
         req.session.loggedIn = true;        
    })
    res.json(dbUser)
    } catch (err) {
     res.status(500).json(err)
    }
 })



// WORKS
router.put('/:id', async (req,res) => {
    User.update(
        {
            name: req.body.name
        },{
        where: {
            id: req.params.id
        }}
    )
})


router.delete('/:id', (req,res) =>
{
    User.destroy({
        where: {
            id: req.params.id
        }
    })
})


module.exports = router

// /api/users

