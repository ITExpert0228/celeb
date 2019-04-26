var Contactus = require('../models/contactus');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.contactus_create = function (req, res) {
    var contactus = new Contactus(
        {
            company: req.body.content.artistsname,
            firstname: req.body.content.firstname,
            lastname: req.body.content.lastname,
            emails: req.body.content.email,
            phonenumber: req.body.content.phone,
            mobile: req.body.content.mobilecellnumber,
            clientcountry: req.body.content.LEADCF19,
            uiclientstate: req.body.content.LEADCF18,
            CompanyWebsite: req.body.content.companywebsite,
            Industry: req.body.content.LEADCF31,
            Events: req.body.content.LEADCF20,
            Service: req.body.content.LEADCF27,
            TypeofEvent: req.body.content.LEADCF32,
            EventDate: req.body.content.eventdate,
            EventCountry: req.body.content.LEADCF19,
            IfUSEventState: req.body.content.LEADCF18,
            EventCity: req.body.content.eventcity,
            EventVenueName: req.body.content.eventvenuename,
            EventNumberofGuests: req.body.content.eventnumberofguest,
            BudgetCurrency: req.body.content.LEADCF26,
            Budget: req.body.content.currency_name,
            AdditionalComments: req.body.content.addtionalcomments,
            SubscribetoENews: req.body.content.LEADCF28
            
        }
    );
console.log("contactus:"+contactus);
    contactus.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Contactus Created successfully');
    })
};

exports.contactus_details = function (req, res) {
    Contactus.findById(req.params.id, function (err, contactus) {
        if (err) return next(err);
        res.send(contactus);
    })
};


exports.contactus_alls = function (req, res) {
    Contactus.find({}).then((contactus) => {
        //console.log(contactus);
        var obj = {  data: contactus };
        console.log(JSON.stringify(obj));
         res.status(200).send(JSON.stringify(obj));

     }).catch((err) => {
         res.status(404).send();
    });

};
exports.contactus_setalls = function (req, res) {
    var contactus = new Contactus(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    contactus.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Contactus Created successfully');
    })

};

exports.contactus_update = function (req, res) {
    Contactus.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, contactus) {
        if (err) return next(err);
        res.send('Contactus udpated.');
    });
};

exports.contactus_delete = function (req, res) {
    Contactus.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};