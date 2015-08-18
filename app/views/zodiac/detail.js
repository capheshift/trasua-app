/** @jsx React.DOM */
var lodash = require('lodash')
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');
var model = require('../../interfaces/zodiac-data.js').data;

module.exports = React.createClass({
  getInitialState: function() {
    var result = lodash.find(model, {id: this.props.zodiacId});
    console.log('zodiacId', this.props.zodiacId, result);
    return {
      model: result
    };
  },
  componentDidMount: function() {
    console.log('zodiacId', this.props.zodiacId);
  },
  render: function() {
    return (
      <div className="zodiac-detail">
        <Header text="CUNG HOÀNG ĐẠO" back="true"/>
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <img src={this.state.model.img} height="213px"/>
            <div className="container">
              <h4>{this.state.model.name}</h4>
              <p>{this.state.model.content}</p>
              <h4>Cung hợp cạ</h4>
              <p>{this.state.model.match}</p>
            </div>
          </ReactIScroll>
        </div>
        <NavBar/>
      </div>
    );
  }
});
