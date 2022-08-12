const React = require('react');

module.exports = function Task({}) {
  return (
    <div className="container">
      <div className="question">
        {}
      </div>
      <form className="answers">
        <input type="submit" />
        <input type="submit" />
        <input type="submit" />
        <input type="submit" />
      </form>
    </div>
  );
};
