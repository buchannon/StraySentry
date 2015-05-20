var express = require('express');
var jzs = require('../JzsCommon');
var router = express.Router();

//Main GET
router.get('/', function(req, res, next) {
    res.send({ MotionSensed: _isMotionDetectedRecently });
    console.log("motion detected: " + _isMotionDetectedRecently);
});

module.exports = router;