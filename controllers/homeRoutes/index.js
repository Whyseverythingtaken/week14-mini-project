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

router.get('/create-project', (req, res) => {
  if (req.session.logged_in) {
    res.render('createProject');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;