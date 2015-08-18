'use strict';

var config = require('../config');
var storage = require('./storage');
var indexName = 'index';

var getIndex = function(){
  return storage.get(indexName) || 0;
};

var setIndex = function(index){
  storage.set(indexName, index);
};

module.exports = {
  getIndex: getIndex,
  setIndex: setIndex
};
