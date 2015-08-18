'use strict';

var config = require('../config');
var prefix = config.storageName;

var getPath = function(path){
  return prefix + '.' + path;
};

var get = function(path){
  return JSON.parse(localStorage.getItem(getPath(path)));
};

var set = function(path, data){
  localStorage.setItem(getPath(path), JSON.stringify(data));
};

var remove = function(path){
  localStorage.removeItem(getPath(path));
};

module.exports = {
  get: get,
  set: set,
  remove: remove
};
