//  api/posts endpoint

const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')


router.get('/', async (req,res) => {
res.status(200).json({message: "route ok"})
})

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            user_id: req.body.user_id
        })
       res.json(newPost)
       } catch (err) {
        res.status(500).json(err)
       }
    })


router.put(':/id', async (req,res) =>{

})

router.delete('/:id', async (req,res) => {

})








module.exports = router