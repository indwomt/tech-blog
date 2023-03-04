//  api/posts endpoint

const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')


router.get('/', async (req,res) => {
const allPosts = await Post.findAll({
})
res.json(allPosts)
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
    router.put('/:id', async (req,res) => {
        Post.update(
            {
                post_title: req.body.post_title,
                post_content: req.body.post_title
            },{
            where: {
                id: req.params.id
            }}
        )
    })

})

router.delete('/:id', async (req,res) => {

})








module.exports = router