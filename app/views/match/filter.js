/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="match-filter">
        <Header text="MỜI TRÀ" back="true" />
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <div className="container">
              <p>FILTER</p>
            </div>
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});
