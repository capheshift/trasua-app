/** @jsx React.DOM */
var React = require('react/addons');
var HomePage = require('./home');
var HomeNewPage = require('./home/new');
var HomeDetailPage = require('./home/detail');
var AboutPage = require('./about');
var LoginPage = require('./user/login');
var ZodiacPage = require('./zodiac');
var ZodiacDetailPage = require('./zodiac/detail');
var MatchPage = require('./match');
var MatchFilterPage = require('./match/filter');
var UserProfilePage = require('./user/profile');
var AddUserInfo = require('./user/add-info');

var router = require('../router');
var storage = require('../interfaces/storage');

var APP = React.createClass({
  getInitialState: function() {
    return {
      page: <p></p>
    }
  },
  handlePage: function(page){
    this.setState({page: page});
  },
  componentDidMount: function() {
    router.addRoute('', function() {
      var curUser = storage.get('cur-user');
      if (curUser !== null) {
        this.setState({page: <HomePage handlePage={this.handlePage}/>});
      } else {
        this.setState({page: <LoginPage/>});
      }
    }.bind(this));

    router.addRoute('home/new', function() {
      this.setState({page: <HomeNewPage/>});
    }.bind(this));

    router.addRoute('home/detail/:id', function(id) {
      this.setState({page: <HomeDetailPage feedId={id}/>});
    }.bind(this));

    router.addRoute('login', function() {
      this.setState({page: <LoginPage/>});
    }.bind(this));

    router.addRoute('add-info', function() {
      this.setState({page: <AddUserInfo/>});
    }.bind(this));

    router.addRoute('profile', function() {
      this.setState({page: <UserProfilePage/>});
    }.bind(this));

    router.addRoute('zodiac', function() {
      this.setState({page: <ZodiacPage/>});
    }.bind(this));

    router.addRoute('zodiac/detail/:id', function(id) {
      this.setState({page: <ZodiacDetailPage zodiacId={id}/>});
    }.bind(this));

    router.addRoute('match', function() {
      this.setState({page: <MatchPage/>});
    }.bind(this));

    router.addRoute('match/filter', function() {
      this.setState({page: <MatchFilterPage/>});
    }.bind(this));

    router.addRoute('about', function(id) {
      this.setState({page: <AboutPage/>});
    }.bind(this));

    router.start();
  },
  render: function() {
    return this.state.page;
  }
});

module.exports = APP;
