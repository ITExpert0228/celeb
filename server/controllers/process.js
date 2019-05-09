var Process = require('../models/process');


exports.process_alls = function (req, res) {

    var index= req.query.index;
    Process.findOne({}).then((process) => {
     //    console.log(process);
        if(index=='process')
        res.status(200).send(process);
        if(index=='privacy')
        res.status(200).send(process);
        if(index=='cookie')
        res.status(200).send(process);

     }).catch((err) => {
         res.status(404).send();
    });

};

exports.process_process_update = function (req, res,next) {
   // console.log( req.body.data);
    Process.findByIdAndUpdate(req.params.id, {$set:{process: req.body.data}}, function (err, process) {
        if (err) return next(err);
        res.send('process udpated.');
    });
};

exports.process_privacy_update = function (req, res,next) {
  //  console.log( req.body);
    Process.findByIdAndUpdate(req.params.id, {$set:{privacy: req.body.data}}, function (err, process) {
        if (err) return next(err);
        res.send('privacy udpated.');
    });
};

exports.process_cookie_update = function (req, res,next) {
 //   console.log( req.body);
    Process.findByIdAndUpdate(req.params.id, {$set:{cookie: req.body.data}}, function (err, process) {
        if (err) return next(err);
        res.send('process udpated.');
    });
};

exports.process_save = function (req, res,next) {

     var process = JSON.stringify(req.body);
   
  };



exports.process_delete = function (req, res,next) {
    Process.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};