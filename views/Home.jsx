const React = require('react');
const Layout = require('./Layout');
const Topic = require('./Topic');

module.exports = function Home({ topics }) {
  return (
    <Layout>
      <div className="container">
        {topics.map((topic) => (
          <Topic key={topic.id} topicId={topic.id} topicName={topic.topicName} />
        ))}
      </div>
    </Layout>
  );
};
