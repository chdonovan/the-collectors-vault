const router = require('express').Router();
const { User, Item, Category } = require('../models');

// get all items for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Item.findAll({
      attributes: [
        'id',
        'item_name',
        'item_description',
        'inventory',
        'category_id',
        'user_id'
      ],
      include: [
        {
          model: Category,
          attributes: ['category_name'],
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbItemData => {
        const items = dbItemData.map(item => item.get({ plain: true }));
  
        res.render('homepage', {
          items,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // get single post
router.get('/post/:id', (req, res) => {
  Item.findOne({
      where: {
      id: req.params.id
      },
      attributes: [
        'id',
        'item_name',
        'item_description',
        'inventory',
        'category_id',
        'user_id'
      ],
      include: [
        {
          model: Category,
          attributes: ['category_name'],
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
  })
      .then(dbPostData => {
      if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
      console.log(err);
      res.status(500).json(err);
      });
});
    
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});


  
module.exports = router;
  