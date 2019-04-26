/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ContactusSchema = new Schema({
    company: {
       type: String,
        default: ''
    },
    firstname: {
        type: String,
        default: '' 
     },
     lastname: {
        type: String,
        default: '' 
     },
     emails: {
        type: String,
        default: '' 
     },
     phonenumber: {
        type: String,
        default: '' 
     },
     mobile: {
        type: String,
        default: '' 
     },
     clientcountry: {
        type: String,
        default: '' 
     },
     uiclientstate: {
        type: String,
        default: '' 
     },
     CompanyWebsite: {
        type: String,
        default: '' 
     },
     Industry: {
        type: String,
        default: '' 
     },
     Events: {
        type: String,
        default: '' 
     },
     Service: {
        type: String,
        default: '' 
     },
     TypeofEvent: {
        type: String,
        default: '' 
     },
     EventDate: {
        type: String,
        default: '' 
     },
     EventCountry: {
        type: String,
        default: '' 
     },
     IfUSEventState: {
        type: String,
        default: '' 
     },
     EventCity: {
        type: String,
        default: '' 
     },
     EventVenueName: {
        type: String,
        default: '' 
     },
     EventNumberofGuests: {
        type: String,
        default: '' 
     },
     BudgetCurrency: {
        type: String,
        default: '' 
     },
     Budget: {
        type: String,
        default: '' 
     },
     AdditionalComments: {
        type: String,
        default: '' 
     },
     SubscribetoENews: {
        type: String,
        default: '' 
     }
});
ContactusSchema.set("toJSON", {virtuals: true});
ContactusSchema.set("toObject", {virtuals: true});
module.exports  = mongoose.model('Contactus', ContactusSchema);

