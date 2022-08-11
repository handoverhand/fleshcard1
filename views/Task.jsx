const React = require('react');

module.exports = function Task({question}) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        
        <input className="input-title" type="text"></input>
        <input className="input-title" type="submit" value="Ответить"></input>

      </div>
    </div>
  );
};
