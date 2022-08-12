const React = require('react');
const Layout = require('./Layout');
const Topic = require('./Topic');

module.exports = function Home({ topics }) {
  return (
    <Layout>
      <div className="container">
        {topics.map((topic,i) => (
          <Topic key={topic.id} topicId={topic.id} topicName={topic.topicName} index={i+1}/>
        ))}
      </div>
    </Layout>
  );
};
