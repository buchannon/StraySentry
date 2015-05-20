var utils = require('./utils');

console.log("jzs sounds loaded");

exports.MakeSound = function() {
    console.log("starting sound");
    //var filePath = '../../public/sounds/lux-laugh.mp3';
    var filePath = '/home/pi/Desktop/Projects/StraySentry/public/sounds/lux-laugh.mp3';

    utils.cmd('omxplayer', [filePath]);
};