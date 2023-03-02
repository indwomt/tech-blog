// api/comments endpoint
const router = require('express').Router();
// const seqeulize = require('./config/connection')
const {User, Post, Comment} = require('../../models')

module.exports = router