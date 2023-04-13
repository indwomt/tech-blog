// api/comments endpoint
const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')


// WORKS
router.get('/', async (req, res) => {
    try {
      const allComments = await Comment.findAll({});
      res.json(allComments);
    } catch (err) {
      res.status(500).json(err);
    }
  });



// 
  router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id
        })
       res.json(newComment)
       } catch (err) {
        res.status(500).json(err)
       }
    })


    router.put('/:id', withAuth, async (req, res) => {
        try {
          const updateComment = await Comment.update(
            {
              comment_content: req.body.comment_content,
            },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          if (!updateComment) {
            res
              .status(404)
              .json({ message: "No comment found" });
            return;
          }
          res.status(200).json(updateComment);
        } catch (err) {
          res.status(400).json(err);
        }
      });


    router.delete('/:id', withAuth, async (req, res) => {
        try {
          const deleteComment = await Comment.destroy({
            where: {
              id: req.params.id,
            },
          });
          if (!deleteComment) {
            res.status(404).json({
              message: "No comment found by that ID"
            });
            return;
          }
      
          res.status(200).json(commentData);
        } catch (err) {
          res.status(500).json(err);
        }
      });



module.exports = router