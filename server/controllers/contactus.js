var ContactUs = require('../models/contactus');
var nodemailer = require('nodemailer');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.contactus_create = function (req, res,next) {
  //  console.log(req.body.content);
    var contactus = new ContactUs(
        req.body.content
    );
  //  console.log("contactus:"+contactus);
    contactus.save(function (err) {
        if (err) {
            return next(err);
        }
    //    console.log("ok");
    
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'financialforsale@gmail.com',
          pass: 'Hsj19911020'
        }
      });
      
      var mailOptions = {
        from: 'financialforsale@gmail.com',
        to: 'financialforsale@gmail.com',
        subject: 'Sending Email from Celeb Site',
        text: 'You have received a email about Celeb Site Contact Us!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            res.send('Request Created successfully');
            console.log('Email sent: ' + info.response);
        }
      });
    })
};

exports.contactus_details = function (req, res,next) {
   // console.log(req.query.id);
    ContactUs.findById(req.query.id, function (err, contactus) {
        if (err) return next(err);
//console.log(contactus);
        res.send(contactus);
    })
};


exports.contactus_alls = function (req, res) {
    ContactUs.find({}).then((contactus) => {
    var obj = {  data: contactus };
     res.status(200).send(JSON.stringify(obj));
    }).catch((err) => {
         res.status(404).send();
    });

};

exports.contactus_setalls = function (req, res) {
    var contactus = new ContactUs(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    contactus.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('ContactUs Created successfully');
    })

};

exports.contactus_update = function (req, res) {
    ContactUs.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, contactus) {
        if (err) return next(err);
        res.send('ContactUs udpated.');
    });
};

exports.contactus_delete = function (req, res) {
    ContactUs.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
exports.contactus_deletebyid = function (req, res,next) {
    var id;
    var action;
    var buf_celebdatatmp = req.body;
    for (x in buf_celebdatatmp) {
    if (x.includes("action")&&(buf_celebdatatmp[x]!='')){action=buf_celebdatatmp[x]; }
    if (x.includes("_id")&&(buf_celebdatatmp[x]!='')){ id=buf_celebdatatmp[x];}
    }
    ContactUs.findByIdAndRemove(id, function (err) {
        if (err) return next(err);
        var retArr = [];
        res.status(200).send(JSON.stringify({data:retArr}));
    })
};