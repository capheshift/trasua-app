/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');
var model = require('../../interfaces/zodiac-data.js').data;

var scrollOpts = {
  click: true
};

module.exports = React.createClass({
  getInitialState: function() {
    console.log('model', model);
    return {
      model: model
    };
  },
  render: function() {
    var items = this.state.model.map(function (item) {
      return (
        <li className="table-view-cell media">
          <a href={'#zodiac/detail/'+item.id} className="navigate-right">
            <img className="media-object pull-left" src={item.icon}/>
            <div className="media-body">
              <b>{item.name}</b>
              <p><small>{item.period}</small></p>
            </div>
          </a>
        </li>
      )
    });

    return (
      <div className="zodiac">
        <Header text="CUNG HOÀNG ĐẠO" back="false"/>
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll} options={scrollOpts}>
            <ul className="table-view">
              {items}
            </ul>
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});
