const bodyParser = require('body-parser');
const router = require('express').Router();
let Post = require('../models/post.model.js');
let Comment = require('../models/comments.model.js');


router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/comments/:id').get((req, res) => {
  Comment.find({ postId: req.params.id })
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/postmessage').post((req, res) => {
  const { username, title, message } = req.body;
  const newPost = new Post({
    username,
    title,
    message
  });
  newPost.save()
  .then(()=> res.json("Post added!"))
  .catch(err => res.status(400).json('Error: '+ err))
});

router.route('/postcomment').post((req, res) => {
  const { postId, username, comment } = req.body;
  const newComment = new Comment({
    postId,
    username,
    comment
  });
  newComment.save()
  .then(()=> res.json("Comment added!"))
  .catch(err => res.status(400).json('Error: '+ err))
});

module.exports = router;
