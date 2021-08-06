var mongoose = require('mongoose');
//  Define schema
var Schema = mongoose.Schema;

var holidayList = new Schema({
    name: {type: String, trim: true},
    day:{type: String },
    date: {type: Date}
});

module.exports = mongoose.model('holidayList', holidayList);