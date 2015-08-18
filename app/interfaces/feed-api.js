var jquery = require('jquery');
var config = require('../config');
var promise = require('promise');
var apiList, result = {};

// define list of api
apiList = [
  { name: 'getByLocation', path: 'post/getByLocation', method: 'GET'},
  { name: 'getAll', path: 'post/getAll', method: 'GET'},
  { name: 'create', path: 'post/create', method: 'POST'}];

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
