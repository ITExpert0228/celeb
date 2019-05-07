var ContactBooking = require('../models/contactBooking');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.contactBooking_create = function (req, res) {
    console.log(req.body.content);
    var contactBooking = new ContactBooking(
        req.body.content
    );
    console.log("contactBooking:"+contactBooking);
    contactBooking.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('ContactBooking Created successfully');
    })
};

exports.contactBooking_details = function (req, res,next) {
    console.log(req.query.id);
    ContactBooking.findById(req.query.id, function (err, contactBooking) {
        if (err) return next(err);
        console.log(contactBooking);
        res.send(contactBooking);
    })
};


exports.contactBooking_alls = function (req, res) {
    ContactBooking.find({}).then((contactBooking) => {
        //console.log(contactBooking);
    var obj = {  data: contactBooking };
    console.log(JSON.stringify(obj));
    res.status(200).send(JSON.stringify(obj));
    }).catch((err) => {
         res.status(404).send();
    });

};
exports.contactBooking_allsbycate = function (req, res) {
    console.log(req.query.Category);
    var Category = req.query.Category;
    ContactBooking.find({Category: Category}).then((contactBooking) => {
    var contactBooking_temp=contactBooking;
    var str='';
    res.status(200).send(JSON.stringify(contactBooking_temp));
    }).catch((err) => {
         res.status(404).send();
    });

};
exports.contactBooking_setalls = function (req, res) {
    var contactBooking = new ContactBooking(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    contactBooking.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('ContactBooking Created successfully');
    })

};

exports.contactBooking_update = function (req, res) {
    ContactBooking.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, contactBooking) {
        if (err) return next(err);
        res.send('ContactBooking udpated.');
    });
};

exports.contactBooking_delete = function (req, res) {
    ContactBooking.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
exports.contactBooking_deletebyid = function (req, res,next) {
    var id;
    var action;
    var buf_celebdatatmp = req.body;
    for (x in buf_celebdatatmp) {
    if (x.includes("action")&&(buf_celebdatatmp[x]!='')){action=buf_celebdatatmp[x]; }
    if (x.includes("_id")&&(buf_celebdatatmp[x]!='')){ id=buf_celebdatatmp[x];}
    }
    ContactBooking.findByIdAndRemove(id, function (err) {
        if (err) return next(err);
        var retArr = [];
        res.status(200).send(JSON.stringify({data:retArr}));
    })
};