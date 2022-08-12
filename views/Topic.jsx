const React = require('react');

module.exports = function Topic({ topicName, topicId, index }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <a href={`/topic/${topicId}/${index === 1 ? 1 : index === 2 ? 2 : index === 3 ? 3 : null}`}>
        <h5 className="card-title">{topicName}</h5>

      </a>
    </div>
  );
};
