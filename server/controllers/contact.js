var Contact = require('../models/contact');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.contact_create = function (req, res) {
    console.log(req.body.content);
    var contact = new Contact(
        req.body.content
    );
    console.log("contact:"+contact);
    contact.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Contact Created successfully');
    })
};

exports.contact_details = function (req, res,next) {
    console.log(req.query.id);
    Contact.findById(req.query.id, function (err, contact) {
        if (err) return next(err);
        console.log(contact);
        res.send(contact);
    })
};


exports.contact_alls = function (req, res) {
    Contact.find({}).then((contact) => {
        //console.log(contact);
    var obj = {  data: contact };
    console.log(JSON.stringify(obj));
    res.status(200).send(JSON.stringify(obj));
    }).catch((err) => {
         res.status(404).send();
    });

};
exports.contact_allsbycate = function (req, res) {
    console.log(req.query.Category);
    var Category = req.query.Category;
    Contact.find({Category: Category}).then((contact) => {
    var contact_temp=contact;
    var str='';
    res.status(200).send(JSON.stringify(contact_temp));
    }).catch((err) => {
         res.status(404).send();
    });

};
exports.contact_setalls = function (req, res) {
    var contact = new Contact(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    contact.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Contact Created successfully');
    })

};

exports.contact_update = function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, contact) {
        if (err) return next(err);
        res.send('Contact udpated.');
    });
};

exports.contact_delete = function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
exports.contact_deletebyid = function (req, res,next) {
    var id;
    var action;
    var buf_celebdatatmp = req.body;
    for (x in buf_celebdatatmp) {
    if (x.includes("action")&&(buf_celebdatatmp[x]!='')){action=buf_celebdatatmp[x]; }
    if (x.includes("_id")&&(buf_celebdatatmp[x]!='')){ id=buf_celebdatatmp[x];}
    }
    Contact.findByIdAndRemove(id, function (err) {
        if (err) return next(err);
        var retArr = [];
        res.status(200).send(JSON.stringify({data:retArr}));
    })
};