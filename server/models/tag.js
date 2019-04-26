/*
	mongoDB Schema for Tag
*/
const mongoose = require ('mongoose');
var Schema=mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var TagSchema = new Schema({
    tag: {
       type: String,
       unique: true,
       required: true
        },
    subtag: {
        type: Array,
        default: []
        }
});
TagSchema.set("toJSON", {virtuals: true});
TagSchema.set("toObject", {virtuals: true});
// Export the model
module.exports = mongoose.model('Tag', TagSchema);

/*
 	Default diseases in the system
		-> those will be added as soon as the system is live
		-> if they are deleted from the system, and the system restarts, then they will be added again in the system
*/

//var scoreOfDisease = {}; // empty map



module.exports.getShowCate = function(catename,  callback) {
    Tag.find({
		tag: catename
	}, callback);
};
