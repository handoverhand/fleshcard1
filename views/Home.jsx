const React = require("react");
const Layout = require("./Layout");
const Task = require("./Task");

module.exports = function Home({ tasks }) {
  return (
    <Layout>
      <div className="container">
        {tasks.map((task) => (
          <Task key={task.id} question={task.question} />
        ))}
      </div>
    </Layout>
  );
};
