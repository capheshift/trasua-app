/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var Loader = require('halogen/BounceLoader');

var openFb = require('../../interfaces/openfb');
var userApi = require('../../interfaces/user-api');
var storage = require('../../interfaces/storage');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      model: {},
      isLoading: true
    }
  },
  componentDidMount: function() {
    var $this = this, fbUser;

    openFb.getUserData().then(function(data){
      fbUser = data;
      console.log('facebook', fbUser);
      return userApi.getByFacebookId({facebook: data});
    }).then(function(r){
      console.log('r', r);
      var user = r.data || {}, userData;

      userData = {
        fullName: fbUser.name || user.fullName,
        phoneNumber: fbUser.phone_number || user.phoneNumber,
        email: fbUser.email || user.email,
        birthday: fbUser.birthday || user.birthday,
        school: user.school || '',
        bio: user.bio || '',
        facebook: fbUser
      };

      console.log('state', userData);
      $this.setState({
        model: userData,
        isLoading:false
      });
    }, function(err){
      console.log('err', err);
    });
  },
  update: function(){

    var model = this.state.model;
    model.phoneNumber = this.refs.phoneNumber.getDOMNode().value;
    model.school = this.refs.school.getDOMNode().value;
    model.bio = this.refs.bio.getDOMNode().value;

    if (model.email.length <= 0 || model.phoneNumber.length <= 0 ||
      model.fullName.length <= 0 || model.birthday.length <= 0) {
      alert('Họ tên, email, số điện thoại, ngày sinh là những trường bắt buộc!');
      return;
    }

    this.setState({isLoading: true});
    userApi.create(model).then(function(r){
      console.log('model r', r);
      storage.set('cur-user', r.data);
      location.hash = '#';
    }, function(err){
      alert('Email của bạn không hợp lệ!');
    });
  },
  handleChange: function(e){
    var model = this.state.model;
    model[e.target.name] = e.target.value;
    this.setState({model: model});
  },
  render: function(){
    var loader = <span></span>;
    if (this.state.isLoading) {
      loader = (
        <div className="loader">
          <Loader color="#CA8452" size="32px"/>
        </div>);
    }

    return (
      <div className="user-page">
        <Header text="THÊM THÔNG TIN"
          leftState="cancel" leftAction=""
          rightState="publish" rightAction={this.update} />
        <div id="wrapper">
          <div className="container">
            <form>
              <input type="text" ref="fullName" name="fullName" placeholder="Họ tên"
                value={this.state.model.fullName} onChange={this.handleChange} />
              <input type="text" ref="phoneNumber" name="phoneNumber" placeholder="Điện thoại"
                value={this.state.model.phoneNumber} onChange={this.handleChange} />
              <input type="text" ref="birthday" name="birthday" placeholder="Ngày sinh (mm/dd/yyyy)"
                value={this.state.model.birthday} onChange={this.handleChange} />
              <input type="text" ref="email" name="email" placeholder="Email"
                value={this.state.model.email} onChange={this.handleChange} />
              <input type="text" ref="school" name="school" placeholder="Trường học/công ty"
                value={this.state.model.school} onChange={this.handleChange} />
              <textarea rows="4" ref="bio" name="bio" placeholder="Sở thích, câu trích dẫn"
                value={this.state.model.bio} onChange={this.handleChange} />
            </form>
            {loader}
          </div>
        </div>
      </div>
    );
  }
});
