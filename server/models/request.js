/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var RequestSchema = new Schema({
    Organization: {
       type: String,
       default: ''
    },
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
      },
    Office_Phone: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Booking: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    EventName: {
        type: String,
        required: true
    },
    Specific_Talent_of_Interest: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Fee_Range_A: {
        type: String,
        required: true
    },
    Fee_Range_B: {
        type: String,
        required: true
    },
    Additional_Information: {
        type: String,
        required: true
    }
});
RequestSchema.set("toJSON", {virtuals: true});
RequestSchema.set("toObject", {virtuals: true});
module.exports  = mongoose.model('Request', RequestSchema);

