"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var rsvpSchema = new mongoose_1.Schema({
    guestName: String,
    isPresent: Boolean,
    numberOfAttendance: Number
});
exports.RSVP = mongoose_1.model("RSVP", rsvpSchema);
