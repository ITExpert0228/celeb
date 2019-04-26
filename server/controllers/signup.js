var Signup = require('../models/signup');
//const sharp = require('sharp');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.signup_create = function (req, res) {
    var signup = new Signup(
        {
            actname: req.body.signup.artistsname,
            contactpersonname: req.body.signup.ContactPersonName,
            email1: req.body.signup.email2,
            email2: req.body.signup.email2,
            phonenumber: req.body.signup.phonenumber1,
            othernumber: req.body.signup.phonenumber2,
            skype: req.body.signup.skype,
            Webo: req.body.signup.webo,
            CountryBased: req.body.signup.country,
            IfUSAStatebasedin: req.body.signup.IfUsaStateBasedIN,
            MailingAddress1: req.body.signup.mailing1,
            MailingAddress2: req.body.signup.mailing2,
            City: req.body.signup.city,
            PostCode: req.body.signup.postcode,
            BestMethodtocontact: req.body.signup.quickresponse,
            Website: req.body.signup.website,
            Facebook: req.body.signup.facebook,
            Bestwaytosell: req.body.signup.bestwayforsell,
            Roaming: req.body.signup.roaming,
            Logistics: req.body.signup.logistics,
            Performance: req.body.signup.performance,
            LineupOptions: req.body.signup.Lineup,
            PriceGuide: req.body.signup.priceguide,
            MinimumFee: req.body.signup.MinimumFee,
            overseas: req.body.signup.available,
            Residencycontracts: req.body.signup.Residency_contracts,
            performedintheMiddleEast: req.body.signup.MiddleEastbefore,
            managementservices: req.body.signup.managementservices,
            whichregion: req.body.signup.whichregion,
            LiabilityGeneralInsurance: req.body.signup.GeneralInsurance,
            SelfEmployed: req.body.signup.SelfEmployed,
            promomaterial: req.body.signup.yrwebsite,
            URLforpromomaterial: req.body.signup.promomaterialurl,
            Youtubevideo:req.body.signup.Youtube1,
            SecondYoutubevideo: req.body.signup.Youtube2,
            RecommendedSearchTerms: req.body.signup.RecommendedSearchTerms,
            ProfileImage: req.body.signup.ProfileImage,
            Images1: req.body.signup.Images1,
            Images2: req.body.signup.Images2,
            Images3: req.body.signup.Images3,
            Images4: req.body.signup.Images4,
            Images5: req.body.signup.Images5,
            Images6: req.body.signup.Images6,
            Rider: req.body.signup.Rider,
            SetList: req.body.signup.SetList,
            Previousclients: req.body.signup.Previousclients,
            Testimonials: req.body.signup.Testimonials            
        }
    );
console.log(signup);
    signup.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(signup);
    })
};

exports.signup_details = function (req, res,next) {
    Signup.findById(req.params.id, function (err, signup) {
        if (err) return next(err);
        res.send(signup);
    })
};
exports.media_upload = async function (req, res, next) {
  const files = req.files;
  var filenames=[];  
  console.log("files.length:"+files.length);
   for (var count = 0; count < files.length; count++) {
    var file = files[count];
    filenames.push(file.filename);
    console.log("filenames:"+file.filename);
    }
  //console.log("file:"+file.upload_imagefile_1.name);
  if (!files) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  
    res.send(filenames);
};

exports.signup_alls = function (req, res) {
    Signup.find({}).then((signup) => {
        //console.log(signup);
        var obj = {  data: signup };
        console.log(JSON.stringify(obj));
        res.status(200).send(JSON.stringify(obj));
     }).catch((err) => {
         res.status(404).send();
    });

};
exports.signup_check = function (req, res) {
    Signup.findByIdAndUpdate(req.params.id, {$set: {Check:'accepted'}}, function (err, signup) {
        if (err) return next(err);
        res.send('Signup udpated.');
    });
};


exports.signup_update = function (req, res) {
    Signup.findByIdAndUpdate(req.params.id, {$set: req.body.signup}, function (err, signup) {
        if (err) return next(err);
        res.send('Signup udpated.');
    });
};

exports.signup_delete = function (req, res) {
    Signup.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};