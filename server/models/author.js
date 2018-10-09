"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var authorSchema = new mongoose_1.Schema({
    name: String,
    age: Number
});
exports.Author = mongoose_1.model("Author", authorSchema);
