/** @jsx React.DOM */
var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    return (
      <nav className="bar bar-tab">
        <a className="tab-item" href="#">
          <span className="icon icon-home"></span>
          <span className="tab-label">trasua</span>
        </a>
        <a className="tab-item" href="#zodiac">
          <span className="icon icon-star-filled"></span>
          <span className="tab-label">SAO</span>
        </a>
        <a className="tab-item" href="#about">
          <span className="icon icon-gear"></span>
          <span className="tab-label">caidat</span>
        </a>
      </nav>
    );
  }
});
