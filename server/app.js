"use strict";
exports.__esModule = true;
var express = require("express");
var graphqlHTTP = require("express-graphql");
var schema_1 = require("./schema/schema");
var mongoose = require("mongoose");
var cors_1 = require("cors");
var fs = require("fs");
var path = require("path");
var app = express();
// allow cors
app.use(cors_1.cors());
// connect to mongodb database
// make sure to replace my db string && creds width your own
mongoose.connect("mongodb://127.0.0.1:32768/wedding-invitation");
mongoose.connection.once('open', function () {
    console.log("connected to db");
});
app.use('/graphql', graphqlHTTP({
    schema: schema_1.Schema,
    graphiql: true
}));
app.use(function (req, res) {
    var currentPath = '';
    if (req.path == '/') {
        currentPath = '/index.html';
    }
    else {
        currentPath = req.path;
    }
    if (currentPath.indexOf(".html") >= 0) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        return res.send(fs.readFileSync(path.join(__dirname, 'html', currentPath), {
            encoding: 'utf-8'
        }));
    }
    else if (currentPath.indexOf("favicon.icon") >= 0) {
        res.setHeader("Content-Type", "image/x-icon");
        return res.send(fs.readFileSync(path.join(__dirname, 'html', currentPath), {
            encoding: 'utf-8'
        }));
    }
    else if (currentPath.indexOf(".css") >= 0) {
        res.setHeader("Content-Type", "text/css; charset=utf-8");
        return res.send(fs.readFileSync(path.join(__dirname, currentPath), {
            encoding: 'utf-8'
        }));
    }
    else if (currentPath.indexOf(".js") >= 0) {
        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
        return res.send(fs.readFileSync(path.join(__dirname, currentPath), {
            encoding: 'utf-8'
        }));
    }
});
app.listen(4000, function () {
    console.log('now listening for requests on port 4000');
});
