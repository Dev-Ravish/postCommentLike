const express = require('express');
const router = express.Router();

const { createBlog, getBlog, updateLikes } = require('../controllers/blog');
const { postComment, getAComment } = require('../controllers/comment');


router.post('/blog/create', createBlog);
router.get('/blogs', getBlog);
router.put('/blog/like/:id',updateLikes);

router.post('/blog/comment/create/:id', postComment);
router.get('/comment/:id', getAComment);
module.exports = router;
