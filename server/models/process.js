/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;

var ProcessSchema = new Schema({
    process: {
            type: String,
    },
    privacy: {
            type: String,
    },
    cookie: {
            type: String,
    }
});
ProcessSchema.set("toJSON", {virtuals: true});
ProcessSchema.set("toObject", {virtuals: true});
module.exports  = mongoose.model('Process', ProcessSchema);

