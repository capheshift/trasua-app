var jquery = require('jquery');
var config = require('../config');
var promise = require('promise');
var apiList, result = {};

// define list of api
apiList = [
  { name: 'create', path: 'user/create', method: 'POST'},
  { name: 'getByFacebookId', path: 'user/getByFacebookId', method: 'GET'},
  { name: 'getAll', path: 'user/getAll', method: 'GET'}];

// create functions with each api link
jquery.each(apiList, function(index, item) {
  result[item.name] = function(data) {
    // in this case, 'this' is a object was referenced from Adapter
    return jquery.ajax({
      url: config.apiPath + item.path,
      type: item.method,
      data: data,
      cache: false
    });
  };
});

module.exports = result;
