var Request = require('../models/request');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.request_create = function (req, res,next) {
    console.log(req.body.content);
    var request = new Request(
        req.body.content
    );
    console.log("request:"+request);
    request.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Request Created successfully');
    })
};

exports.request_details = function (req, res,next) {
    console.log(req.query.id);
    Request.findById(req.query.id, function (err, request) {
        if (err) return next(err);
        console.log(request);
        res.send(request);
    })
};


exports.request_alls = function (req, res) {
    Request.find({}).then((request) => {
        //console.log(request);
        var obj = {  data: request };
        console.log(JSON.stringify(obj));
         res.status(200).send(JSON.stringify(obj));

     }).catch((err) => {
         res.status(404).send();
    });

};
exports.request_allsbycate = function (req, res) {
    console.log(req.query.Category);
    var Category = req.query.Category;
    Request.find({Category: Category}).then((request) => {
    var request_temp=request;
     var str='';
    //  for(var i=0; i<100;i++)
    //  {
    //      request_temp.push(request[i]);   
    //   }
    //   console.log(request_temp);
      res.status(200).send(JSON.stringify(request_temp));
    }).catch((err) => {
         res.status(404).send();
    });

};
exports.request_setalls = function (req, res) {
    var request = new Request(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    request.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Request Created successfully');
    })

};

exports.request_update = function (req, res) {
    Request.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, request) {
        if (err) return next(err);
        res.send('Request udpated.');
    });
};

exports.request_delete = function (req, res) {
    Request.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


exports.request_deletebyid = function (req, res,next) {
    var id;
    var action;
    var buf_celebdatatmp = req.body;
    for (x in buf_celebdatatmp) {
    if (x.includes("action")&&(buf_celebdatatmp[x]!='')){action=buf_celebdatatmp[x]; }
    if (x.includes("_id")&&(buf_celebdatatmp[x]!='')){ id=buf_celebdatatmp[x];}
    }
    Request.findByIdAndRemove(id, function (err) {
        if (err) return next(err);
        var retArr = [];
        res.status(200).send(JSON.stringify({data:retArr}));
    })
};