"use strict";

var contactusAPIRouter = require("./contactus");
var signupAPIRouter = require("./signup");
var entertainmentAPIRouter = require("./entertainment");
var tagAPIRouter = require("./tag");
var userAPIRouter = require("./user");
var frontcmsAPIRouter = require("./frontcms");
    // roleAPIRouter = require("./role"),
    // assetsAPIRouter = require('./assets.js');

function register(app) {
    // app.use(["/api" + "/roles", "/roles"], roleAPIRouter);
    app.use(["/api" + "/contactus"], contactusAPIRouter);
    app.use(["/api" + "/signup"], signupAPIRouter);
    app.use(["/api" + "/entertainment"], entertainmentAPIRouter);
    app.use(["/api" + "/partentertainment"], entertainmentAPIRouter);
    app.use(["/api" + "/tag"], tagAPIRouter);
    app.use(["/api" + "/users"], userAPIRouter);
    app.use(["/api" + "/frontcms"], frontcmsAPIRouter);
    // app.use(["/api" + "/assets", "/assets"], assetsAPIRouter);
}

exports.register = register;
