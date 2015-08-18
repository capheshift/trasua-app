/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var NavBar = require('../components/nav-bar');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      facebookLink: ''
    }
  },
  facebookLink: function(){
    window.open(this.state.facebookLink, '_system', 'location=yes');
  },
  render: function() {
    return (
      <div className="profile">
        <Header text="TRÀ SỮA" back="true"/>

        <div id="wrapper">
          <div className="container">
            <b>Tư Cuồng</b><br/>
            <small>Nam - Ma Kết - 18t</small><br/>
            <small>ĐH Công Nghệ Thông Tin.</small><br/>
            <p>Nếu biết tình như thế, chẳng lớn lên làm gì, thà như ngày thơ ấu, hai đứa cầm tay đi, thuở còn thơ ngày 3 cữ là thường.</p>
          </div>

          <ul className="table-view">
            <li className="table-view-cell">
              <a href="javascript:;" className="navigate-right" onClick={this.facebookLink} >
                <small>Facebook link</small>
              </a>
            </li>
            <li className="table-view-cell">
              <a className="navigate-right" href="tel:01643652922" >
                <small>Phone: 01643-652-922</small>
              </a>
            </li>
            <li className="table-view-cell">
              <a href="mailto:tampham47@live.com" className="navigate-right">
                <small>Email: tampham47@live.com</small>
              </a>
            </li>
          </ul>
        </div>
        <NavBar/>
      </div>
    );
  }
});
