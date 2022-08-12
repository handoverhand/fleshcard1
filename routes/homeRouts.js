const router = require('express').Router();
const Home = require('../views/Home');
const { Topic } = require('../db/models');

router.get('/', async (req, res) => {
  const topics = await Topic.findAll({
    raw: true,
  });
  // console.log(tasks)
  res.renderComponent(Home, { topics });
});

module.exports = router;
