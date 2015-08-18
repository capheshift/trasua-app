/** @jsx React.DOM */

var React = require('react');
var APP = require('./views/app');

var initApp = function(){
  React.renderComponent(
    <APP/>,
    document.getElementById('main'));
};

if (window.cordova){
  // working at cordova
  navigator.splashscreen && navigator.splashscreen.show();
  document.addEventListener('deviceready', function() {
    navigator.splashscreen.show();
    initApp();
    setTimeout(function() {
      navigator.splashscreen.hide();
    }, 500);
  }, false);

} else {
  // working at browser
  initApp();
}

