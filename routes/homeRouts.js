const router = require('express').Router();
const Home = require('../views/Home');
const taska = require('../views/Task')
const { Topic } = require('../db/models');
const { Task } = require('../db/models');

router.get('/', async (req, res) => {
  const topics = await Topic.findAll({
    raw: true,
  });
  // console.log(tasks)
  res.renderComponent(Home, { topics });
});

router.get('/:topicId/:id', async (req, res) => {
  const { topicId, id } = req.params;
  const answ = await Task.findOne({ where: { topicId, id }, raw: true });
  console.log('@@@@@@@@@@@',answ);
  res.renderComponent(taska, { taska: answ });
});

module.exports = router;
