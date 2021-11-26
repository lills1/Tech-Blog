const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Post.findAll({
    include: [{
      model: User
    }]
  }).then(data => {
    console.log(data);
    res.json(data)
  })
});

//find a single post by id
router.get('/:id', (req, res) => {
  Post.findByPk(req.params.id, {
    include: [{
      model: User
    }]
  }).then(data => {
    console.log(data);
    res.json(data)
  })
});

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  Post.update(req.body, {
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
  Post.destroy({
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
