const router = require('express').Router();
const Home = require('../views/Home');
const { Task } = require('../db/models');

router.get('/', async (req, res) => {
  const tasks = await Task.findAll({
    raw: true,
  });
  // console.log(tasks)
  res.renderComponent(Home, { tasks });
});

module.exports = router;
