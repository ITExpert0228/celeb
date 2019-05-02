/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ContactSchema = new Schema({
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
    Address: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Zip: {
        type: String,
        required: true
    },
    Country: {
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
ContactSchema.set("toJSON", {virtuals: true});
ContactSchema.set("toObject", {virtuals: true});
module.exports  = mongoose.model('Contact', ContactSchema);

