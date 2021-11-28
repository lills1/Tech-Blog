const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({
    include: [{
      model: Post
    }]
  }).then(data => {
    console.log(data);
    res.json(data)
  })
});

//find a single post by id
router.get('/:id', (req, res) => {
  Comment.findByPk(req.params.id, {
    include: [{
      model: Post
    }]
  }).then(data => {
    console.log(data);
    res.json(data)
  })
});


router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      console.log(data);
      res.json(data)
    })
});

router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      console.log(data);
      res.json(data)
    })
});

module.exports = router;