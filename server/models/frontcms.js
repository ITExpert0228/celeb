/*
	mongoDB Schema for Frontcms
*/
const mongoose = require ('mongoose');
var Schema=mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var FrontcmsSchema = new Schema({
    title: {
       type: String,
        required: true
        },
    content: {
        type: String,
        default:''
        },
    img:{
        type: Array,
        default: []
       }    
});
FrontcmsSchema.set("toJSON", {virtuals: true});
FrontcmsSchema.set("toObject", {virtuals: true});
// Export the model
module.exports = mongoose.model('Frontcms', FrontcmsSchema);

/*
 	Default diseases in the system
		-> those will be added as soon as the system is live
		-> if they are deleted from the system, and the system restarts, then they will be added again in the system
*/

//var scoreOfDisease = {}; // empty map



module.exports.getShowCate = function(catename,  callback) {
    Frontcms.find({
		tag: catename
	}, callback);
};
