var holidayListService = require('../Services/HolidayListService');  
var holidayModel = require('../Models/HolidayList');

// Get holidayList

var holidayList_get = function(req, res) {
    let criteria = {};
    var projection = {};
    var options = {}; 
    holidayListService.getHolidayList(criteria, projection, options, function (err, data) { 
        holidayList = {
            "HolidayList" : data
        }
        res.send(holidayList)
    });          
}

var holidayList_post = function(req, res) {
    objToSave = req.body;
    new holidayModel(objToSave).save(function(err, data) {
        if (err) {
            console.log("Error --", err);
        } else {
            console.log("Data inserted in DB --", data)
            message = {
                "data" : data,
                "Message": "New entry inserted in Holiday List"
            };
            res.send(message);
        }
    })
}


module.exports = {
    get:holidayList_get,
    post:holidayList_post
}