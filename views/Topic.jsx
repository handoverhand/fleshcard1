const React = require('react');

module.exports = function Topic({ topicName, topicId }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <a href={`/topic/${topicId}`}>
        <h5 className="card-title">{topicName}</h5>
      </a>
    </div>
  );
};
