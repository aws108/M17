console.log('Starting notes.js');

const fs = require('fs');

const notes = require('./notes.js');

const _ = require('lodash');

var filteredArray = _.uniq(['Charles',1,2,3,4,'Carlos']);

console.log(filteredArray);
