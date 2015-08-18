/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var Loader = require('halogen/BounceLoader');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');
var DetailPage = require('./detail');

var scrollOpts = {
  click: true
};

var storage = require('../../interfaces/storage');
var feedApi = require('../../interfaces/feed-api');

module.exports = React.createClass({
  getInitialState: function(){
    var model = storage.get('feeds') || [];
    return {
      model: model,
      pos: {},
      isLoading: true
    }
  },
  componentDidMount: function(){
    // get location
    navigator.geolocation.getCurrentPosition(function(position) {
      // this.setState({pos: position.coords});
      var pos = position.coords;
      var model = {
        latitude: pos.latitude,
        longitude: pos.longitude
      };

      feedApi.getByLocation(model).then(function(data){
        storage.set('feeds', data);
        this.setState({model: data, isLoading: false});
      }.bind(this), function(err){
        return;
      });
    }.bind(this));

    setTimeout(function(){
      this.setState({isLoading: false});
    }.bind(this), 2000);
  },
  render: function() {
    var loader = <span></span>;
    var items = <li></li>
    var nocontent = <span></span>;

    if (this.state.isLoading) {
      loader = (
        <div className="loader">
          <Loader color="#CA8452" size="32px"/>
        </div>
      );
    } else {
      if (!this.state.model.length) {
        nocontent = (
          <li className="table-view-cell">
            <a href="javascript:;">
              Hiện tại chưa có bài post, hãy là người post đầu tiên!
            </a>
          </li>
        );
      }
    }

    if (this.state.model.length) {
      items = this.state.model.map(function (item, i) {
        return (
          <li className="table-view-cell media">
            <a href={'#home/detail/' + item._id} className="navigate-right">
              <img className="media-object pull-left"
                src={'http://avatars.io/facebook/' + item._user.facebook.id + '?size=medium'}/>
              <div className="media-body">
                <b>{item._user && item._user.fullName}</b>
                <p><small>{item.content}</small></p>
              </div>
            </a>
          </li>
        )
      }.bind(this));
    }

    return (
      <div className="home">
        <Header text="TRÀ SỮA" state="new" link="#home/new"/>

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll} options={scrollOpts}>
            <ul className="table-view">
              {items}
              {nocontent}
            </ul>
            {loader}
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});

