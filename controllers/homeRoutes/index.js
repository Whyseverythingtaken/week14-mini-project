const router = require('express').Router();
const Projects = require('../../models/Project');

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.findAll({
      raw: true
    });
    res.render('projects', {projects});
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/profile', async (req, res) => {
  if (req.session.logged_in) {
    const projects = await Projects.findAll({
      where: {
        user_id: req.session.user_id
      },
      raw: true
    });

    // console.log('User projects', projects);
    res.render('profile', {projects});
  } else {
    res.redirect('/login');
  }
});

module.exports = router;