/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var SearchBar = require('../components/search-bar');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Loader = require('halogen/BounceLoader');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');

var config = require('../../config');
var openFb = require('../../interfaces/openfb');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      config: config
    }
  },
  contribute: function(){
    window.open(config.link.contribute, '_system', 'location=yes');
  },
  rateApp: function(){
    alert('rateApp');
  },
  shareApp: function(){
    openFb.shareToFeed(config.shareInfo);
  },
  more: function(){
    window.open(config.link.tumblr, '_system', 'location=yes');
  },
  feedback: function(){
    window.open(config.link.feedback, '_system', 'location=yes');
  },
  privacyPolicy: function(){
    alert('privacyPolicy');
  },
  render: function(){
    return (
      <div>
        <Header text="THÔNG TIN" back="false"/>

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll} options={{click: true}}>
            <div className="container">
              <p>
                #trasua giúp bạn dễ dàng tìm được người yêu ưng ý dựa trên cung hoàng đạo. Bạn có thể xem fb, nhắn tin hay gọi điện cho người bạn quan tâm.
              </p>
              <small>v0.9.2</small>
              <br/>
              <br/>
            </div>
            <ul className="table-view">
              <li className="table-view-cell">
                <a href="#login" className="navigate-right">
                  <small>Cập nhật profile</small>
                </a>
              </li>
              {/*<li className="table-view-cell">
                <a className="navigate-right" onClick={this.rateApp}>
                  <small>Đánh giá ứng dụng</small>
                </a>
              </li>*/}
              <li className="table-view-cell">
                <a className="navigate-right" onClick={this.shareApp}>
                  <small>Chia sẻ ứng dụng</small>
                </a>
              </li>
              <li className="table-view-cell">
                <a className="navigate-right" onClick={this.more}>
                  <small>Chi tiết và chính sách bảo mật</small>
                </a>
              </li>
              <li className="table-view-cell">
                <a className="navigate-right" href='mailto:tampham47@live.com?subject=[FB-TRASUA]'>
                  <small>Phản hồi</small>
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
