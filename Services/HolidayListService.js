var holidayModel = require('../Models/HolidayList');

//Get holiday list from DB
var getHolidayList = function (criteria, projection, options, callback) {
    options.lean = true;
    holidayModel.find(criteria, projection, options, callback);
};

//Insert holiday list in DB
var createHolidayList = function (objToSave, callback) {
    new holidayModel(objToSave).save(callback)
};

//Update holiday list in DB
var updateHolidayList = function (criteria, dataToSet, options, callback) {
    options.lean = true;
    options.new = true;
    holidayModel.findOneAndUpdate(criteria, dataToSet, options, callback);
};

//Delete holiday list from DB
var deleteHolidayList = function (criteria, callback) {
    holidayModel.remove(criteria, callback);
};


module.exports = {
    getHolidayList: getHolidayList,
    updateHolidayList: updateHolidayList,
    deleteHolidayList: deleteHolidayList,
    createHolidayList: createHolidayList
};

