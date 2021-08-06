var express = require('express');
var router = express.Router();

// Require Modules
var holidayListController = require('../Controllers/HolidayListController');

/* GET holiday lists listing. */

router.get('/holidayList', holidayListController.get);
router.post('/addHolidays', holidayListController.post);

module.exports = router;
