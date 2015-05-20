/**
 * Created by bucha_000 on 5/19/2015.
 */

var jzs = require('./JzsCommon');

var _gpioPin = 14;
jzs.motiondetector.InitMotionDetector(_gpioPin, MotionDetectedCallback, MotionNotDetectedCallback);

var _isMotionDetectedRecently = 0;

//Detected!
function MotionDetectedCallback()
{
    console.log("Motion Detected!");
    _isMotionDetectedRecently = 1;
    jzs.camera.TakePicture();
    jzs.sound.MakeSound();
}

//No motion
function MotionNotDetectedCallback()
{
    _isMotionDetectedRecently = 0;
}