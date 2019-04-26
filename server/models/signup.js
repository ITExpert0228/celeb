/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');

var signupSchema = mongoose.Schema({
  actname: {
    type: String,
    default: ''  
   },
 contactpersonname: {
     type: String,
     default: ''  
   },
  email1: {
     type: String,
     default: ''  
   },
  email2: {
     type: String,
     default: ''  
   },
  phonenumber: {
     type: String,
     default: ''  
   },
  othernumber: {
     type: String,
     default: ''  
   },
  skype: {
     type: String,
     default: ''  
   },
  Webo: {
     type: String,
     default: ''  

 },
  CountryBased: {
     type: String,
    default: ''  
  },
  IfUSAStatebasedin: {
     type: String,
    default: ''  
  },
  MailingAddress1: {
     type: String,
    default: ''  
  },
  MailingAddress2: {
     type: String,
    default: ''  
  },
  City: {
     type: String,
    default: ''  
  },
  PostCode: {
     type: String,
    default: ''  
  },
  BestMethodtocontact: {
     type: String,
    default: ''  
  },
  Website: {
     type: String,
    default: ''  
  },
  Facebook: {
     type: String,
    default: ''  
  },
  Bestwaytosell: {
     type: String,
    default: ''  
  },
  Roaming: {
     type: String,
    default: ''  
  },
  Logistics: {
     type: String,
    default: ''  
  },
  Performance: {
     type: String,
    default: ''  
  },
  LineupOptions: {
     type: String,
    default: ''  
  },
  PriceGuide: {
     type: String,
    default: ''  
  },
  MinimumFee: {
     type: String,
    default: ''  
  },
  overseas: {
     type: String,
    default: ''  
  },
  Residencycontracts: {
     type: String,
    default: ''  
  },
  performedintheMiddleEast: {
     type: String,
    default: ''  
  },
  managementservices: {
     type: String,
    default: ''  
  },
  whichregion: {
     type: String,
    default: ''  
  },
  LiabilityGeneralInsurance: {
     type: String,
    default: ''  
  },
  SelfEmployed: {
     type: String,
    default: ''  
  },
  promomaterial: {
     type: String,
    default: ''  
  },
  URLforpromomaterial: {
     type: String,
    default: ''  
  },
  Youtubevideo: {
     type: String,
    default: ''  
  },
  SecondYoutubevideo: {
     type: String,
    default: ''  
  },
  RecommendedSearchTerms: {
     type: String,
    default: ''  
  },
  ProfileImage: {
     type: String,
    default: ''  
  },
  Images1: {
     type: String,
    default: ''  
  },
  Images2: {
     type: String,
    default: ''  
  }
  ,Images3: {
     type: String,
    default: ''  
  },
  Images4: {
     type: String,
    default: ''  
  },
  Images5: {
     type: String,
    default: ''  
  },
  Images6: {
     type: String,
    default: ''  
  },
  Rider: {
     type: String,
    default: ''  
  },
  SetList: {
     type: String,
    default: ''  
  },
  Previousclients: {
     type: String,
    default: ''  
  },
  Testimonials: {
     type: String,
    default: ''  
  },
  Check: {
   type: String,
   default: ''  
  }
});

var Signup = mongoose.model('Signup', signupSchema);

/*
 	Default diseases in the system
		-> those will be added as soon as the system is live
		-> if they are deleted from the system, and the system restarts, then they will be added again in the system
*/

//var scoreOfDisease = {}; // empty map

module.exports =  Signup;

/*module.exports.getShowCate = function(catename,  callback) {
    Altusdb.find({
		tag: catename
	}, callback);
};*/
