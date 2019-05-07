"use strict";

var celebdataAPIRouter = require("./celebdata");
var contactusAPIRouter = require("./contactus");
var contactBookingAPIRouter = require("./contactBooking");
var requestAPIRouter = require("./request");
var userAPIRouter = require("./user");
var processAPIRouter = require("./process");
function register(app) {
    app.use(["/api" + "/users"], userAPIRouter);
    app.use(["/api" + "/celebdata"], celebdataAPIRouter);
    app.use(["/api" + "/contactus"], contactusAPIRouter);
    app.use(["/api" + "/contactBooking"], contactBookingAPIRouter);
    app.use(["/api" + "/request"], requestAPIRouter);
    app.use(["/api" + "/frontcms/process"], processAPIRouter);
}

exports.register = register;
