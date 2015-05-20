var utils = require('./utils');
//var fs = require('fs');
//var lame = require('lame');
//var Speaker = require('speaker');

console.log("jzs sounds loaded");

exports.MakeSound = function() {
    console.log("starting sound");
    //var filePath = '../../public/sounds/lux-laugh.mp3';
    var filePath = '/home/pi/Desktop/Projects/StraySentry/public/sounds/lux-laugh.mp3';

    utils.cmd('omxplayer', [filePath]);
    //foo = new cmd('netstat', ['-rn'],
//    function (me, data) {me.stdout += data.toString();},
//    function (me) {me.exit = 1;}
//);

    //fs.createReadStream('../../public/sounds/lux-laugh.mp3')
    //    .pipe(new lame.Decoder())
    //    .on('format', function (format) {
    //        this.pipe(new Speaker(format));
    //    });
};