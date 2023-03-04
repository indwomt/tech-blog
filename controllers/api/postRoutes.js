//  api/posts endpoint

const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')


router.get('/', async (req, res) => {
    try {
      const allPosts = await Post.findAll({});
      res.json(allPosts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

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


// troubleshoot
// /api/users/id endpoint 
router.get('/:id', async (req, res) => {
    try {
      const singlePost = await Post.findByPk(req.params.id, {

      
        attributes: ['id', 'post_title', 'post_content', 'user_id'],
        include: [
          {
            model: User,
            attributes: ['name']
          },
          {
            model: Comment,
            attributes: ['id', 'user_id', 'post_id', 'comment_content'],
            include: [
              {
                model: User,
                attributes: ['name']
              }
            ]
          }
        ]
      });
      res.json(singlePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  





// troubleshoot
    router.put('/:id', async (req,res) => {
        Post.update(
            {
                post_title: req.body.post_title,
                post_content: req.body.post_content

            },{
            where: {
                id: req.params.id
            }}
        )
    })


router.delete('/:id', async (req,res) => {

})








module.exports = router