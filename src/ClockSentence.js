"use strict";
// * Clock sentence that will get the current time and print out a colloquial version
exports.__esModule = true;
// * Only to the nearest five minutes following this pattern
// * It is (five | ten | quarter ) ... (of | past ) ... (1 .. 12) ... (o'clock | thirty)
exports.clockSentence = function (now) {
    var intro = "It's about";
    if (now === undefined) {
        now = new Date();
    }
    var hours = now.getHours() % 12 === 0 ? 12 : now.getHours() % 12;
    var minutes = now.getMinutes();
    if (minutes > 42) {
        hours++;
    }
    var preFix = computePrefix(minutes);
    var ofOrPast = computePastOrTill(minutes);
    if (preFix.length === 0) {
        ofOrPast = "";
    }
    var thirtyPostFix = needsThirtyAdded(minutes);
    var amPmPostFix = now.getHours() > 11 ? now.getHours() > 17 ? "at night" : "in the afternoon" : "in the morning";
    return [intro, preFix, ofOrPast, hours, thirtyPostFix, amPmPostFix]
        .filter(function (part) { return part.toString().length > 0; })
        .join(" ");
};
var computePastOrTill = function (minutes) {
    if (minutes <= 17)
        return "past";
    if (minutes <= 27)
        return "till";
    if (minutes <= 42)
        return "past";
    return "till";
};
var needsThirtyAdded = function (minutes) {
    return minutes > 17 && minutes < 43 ? "thirty" : "";
};
var computePrefix = function (minutes) {
    var minutesInHalf = minutes % 30;
    switch (minutesInHalf) {
        case 0:
        case 1:
        case 2:
            return "";
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            return "five";
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return "ten";
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            return "a quarter";
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            return "ten";
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
            return "five";
        case 28:
        case 29:
            return "";
    }
};
