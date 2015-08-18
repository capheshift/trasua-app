/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var NavBar = require('../components/nav-bar');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');

var storage = require('../../interfaces/storage');
var lodash = require('lodash');
var moment = require('moment');

module.exports = React.createClass({
  getInitialState: function(){
    var feeds = storage.get('feeds');
    var model = lodash.find(feeds, {_id: this.props.feedId});
    var age = moment().diff(moment(model._user.birthday, 'MM/DD/YYYY'), 'years');
    model._user.age = age;
    return {
      model: model
    }
  },
  facebookLink: function(link){
    window.open(link, '_system', 'location=yes');
  },
  render: function() {
    return (
      <div className="profile">
        <Header text="TRÀ SỮA" back="true"/>

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll} options={{click: true}}>
            <div className="container">
              <b>{this.state.model._user.fullName}</b><br/>
              <small>Nam - {this.state.model._user.zodiac} - {this.state.model._user.age}t</small><br/>
              <small>{this.state.model._user.school}</small><br/>
              <p>{this.state.model.content}</p>
            </div>
            <ul className="table-view">
              <li className="table-view-cell">
                <a href="javascript:;" className="navigate-right" onClick={this.facebookLink.bind(this, this.state.model._user.facebook.link)} >
                  <small>Facebook</small>
                </a>
              </li>
              <li className="table-view-cell">
                <a className="navigate-right" href={'tel:' + this.state.model._user.phoneNumber} >
                  <small>{this.state.model._user.phoneNumber}</small>
                </a>
              </li>
              <li className="table-view-cell">
                <a href={'mailto:' + this.state.model._user.email} className="navigate-right">
                  <small>{this.state.model._user.email}</small>
                </a>
              </li>
            </ul>
          </ReactIScroll>
        </div>
        <NavBar/>
      </div>
    );
  }
});
