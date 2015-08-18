/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="match">
        <Header text="MỜI TRÀ" back="false" filter="true" link="#match/filter" />
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <ul className="table-view">
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Tư Cuồng</b>
                    <p><small>Nam - Ma Kết - 18t</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Tam Pham</b>
                    <p><small>Nam - Ma Kết - 18t</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Ngân Nguyễn</b>
                    <p><small>Nam - Ma Kết - 18t</small></p>
                  </div>
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
