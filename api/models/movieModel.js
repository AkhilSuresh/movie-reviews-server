'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: String,
  rollnum: String
});

module.exports = mongoose.model('Tasks', TaskSchema);