/** @jsx React.DOM */
var openFb = require('../../interfaces/openfb');

var React = require('react/addons');
var Header = require('../components/header');

module.exports = React.createClass({
  login: function() {
    openFb.login().then(function() {
      window.location.hash = '#add-info';
    }, function(err) {
      alert('Err :' + JSON.stringify(err));
    });
  },
  render: function() {
    return (
      <div className="login">
        <div className="content">
          <a onClick={this.login} href="javascript:;" className="btn btn-block btn-outlined">ĐĂNG NHẬP</a>
        </div>
      </div>
    );
  }
});
