const React = require('react');
const Layout = require('./Layout');
const Task = require('./Task');

module.exports = function Home({tasks}) {
  return (
    <Layout>
      <p>Привет</p>
      {tasks.map((task) => 
        <Task key={task.id} question={task.question} />)}
    </Layout>
  );
};
