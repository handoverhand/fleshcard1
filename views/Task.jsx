const React = require('react');

module.exports = function Task({ task, question }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <a href={task}>
        <h5 className="card-title">{question}</h5>
      </a>
    </div>
  );
};
