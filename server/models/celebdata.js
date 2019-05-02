/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CelebdataSchema = new Schema({
    url: {
       type: String,
       default: ''
    },
    image: {
        type: String,
        default: '' 
     },
     profiletext: {
        type: String,
        default: '' 
     },
     pricing: {
        type: String,
        default: '' 
     },
     Type: {
        type: String,
        default: '' 
     },
     Category: {
        type: String,
        default: '' 
     },
     faq: [
        {
           ques:{
           type: String,
           default: '' 
         },
            answ:{
            type: String,
            default: '' 
         }
      }],
     name: {
        type: String,
        default: '' 
     }
});
CelebdataSchema.set("toJSON", {virtuals: true});
CelebdataSchema.set("toObject", {virtuals: true});
module.exports  = mongoose.model('Celebdata', CelebdataSchema);

