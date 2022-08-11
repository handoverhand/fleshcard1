const React = require('react');
const Layout = require('./Layout');
const Task = require('./Task');

module.exports = function Home({}) {
  return (
    <Layout>
      <p>Привет</p>
      <Task/>
    </Layout>
  )
}