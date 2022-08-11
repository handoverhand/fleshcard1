const React = require('react');

module.exports = function Task({question}) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
      </div>
    </div>
  );
};
