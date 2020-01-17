"use strict";
exports.__esModule = true;
var ClockSentence_1 = require("./ClockSentence");
var pingTimeOnInterval = function (interval) {
    console.log(ClockSentence_1.clockSentence());
    setInterval(function () {
        console.clear();
        console.log(ClockSentence_1.clockSentence());
    }, interval);
};
var main = function () {
    var timeBetweenPings = 60000; // * Every minutes
    pingTimeOnInterval(timeBetweenPings);
};
main();
