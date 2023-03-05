// api/comments endpoint
const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')

router.get('/', async (req, res) => {
    try {
      const allComments = await Comment.findAll({});
      res.json(allComments);
    } catch (err) {
      res.status(500).json(err);
    }
  });







module.exports = router