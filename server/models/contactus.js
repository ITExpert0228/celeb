/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ContactUsSchema = new Schema({
    Full_Name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
});
ContactUsSchema.set("toJSON", {virtuals: true});
ContactUsSchema.set("toObject", {virtuals: true});
module.exports  = mongoose.model('ContactUs', ContactUsSchema);

