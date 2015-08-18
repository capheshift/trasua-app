/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var Loader = require('halogen/BounceLoader');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');

var feedApi = require('../../interfaces/feed-api');
var storage = require('../../interfaces/storage');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      pos: {},
      isLoading: false
    }
  },
  componentDidMount: function(){
    // get location
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('position', position);
      this.setState({pos: position.coords});
    }.bind(this));
  },
  publish: function(){
    this.setState({isLoading: true});

    var curUser = storage.get('cur-user');
    var pos = this.state.pos;
    var model = {
      content: this.refs.content.getDOMNode().value,
      latitude: pos.latitude,
      longitude: pos.longitude,
      coords: pos,
      _user: curUser._id
    };
    console.log('model', model, curUser);

    feedApi.create(model).then(function(data){
      console.log('data', data)
      window.location.hash = '#';
    }, function(){

    });
  },
  render: function() {
    var loader = <span></span>;
    if (this.state.isLoading) {
      loader = (
        <div className="loader">
          <Loader color="#CA8452" size="32px"/>
        </div>
      );
    }

    return (
      <div className="home">
        <Header text="ĐĂNG TRẠNG THÁI"
          leftState="cancel" leftAction=""
          rightState="publish" rightAction={this.publish} />

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <div className="container">
              <form>
                <textarea ref="content" placeholder="Cập nhật trang thái..." rows="4"></textarea>
              </form>
              <p><small>Trạng thái của bạn sẽ chỉ xuất hiện trong vòng bán kính 3km từ vị trí được đăng.</small></p>
              <p><small>Bạn đăng càng nhiều trạng thái thì khả năng bạn tìm được gấu sẽ nhiều hơn :v</small></p>
              {loader}
            </div>
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});

