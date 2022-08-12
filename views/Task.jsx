const React = require('react');
const Layout = require('./Layout');

module.exports = function taska({ taska }) {
  console.log(taska.question);
  return (
    <Layout>
    <div className="container">
      <div className="question">
        {taska.question}
      </div>
      <ul className="answers">
        <li><a href="#" className="taska.answer1">{taska.answer1}</a></li>
        <li><a href="#" className="taska.answer2">{taska.answer2}</a></li>
        <li><a href="#" className="taska.answer3">{taska.answer3}</a></li>
        <li><a href="#" className="taska.trueAnswer">{taska.trueAnswer}</a></li>
      </ul>
    </div>
    </Layout>
  );
};
