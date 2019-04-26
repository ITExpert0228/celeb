var Frontcms = require('../models/frontcms');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.frontcms_create = function (req, res) {
    res.send('d');
};
exports.frontcms_uploadimages = function (req, res,next) {
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
exports.frontcms_details = function (req, res) {
    Frontcms.findById(req.params.id, function (err, frontcms) {
        if (err) return next(err);
        res.send(frontcms);
    })
};


exports.frontcms_alls = function (req, res) {
    Frontcms.find({}).then((frontcms) => {
        console.log(frontcms);
         res.status(200).send(frontcms);
     }).catch((err) => {
         res.status(404).send();
    });

};
exports.frontcms_setalls = function (req, res) {
    var frontcms = new Frontcms(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    frontcms.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Frontcms Created successfully');
    })

};

exports.frontcms_update = function (req, res,next) {
    Frontcms.findByIdAndUpdate(req.params.id, {$set: {title:req.body.content.title,content:req.body.content.content}}, function (err, frontcms) {
        if (err) return next(err);
        res.send('Frontcms udpated.');
    });
};

exports.frontcms_updateimages = function (req, res,next) {
    Frontcms.findById(req.params.id, function (err, frontcms) {
        for (i = 0; i < req.body.content.img.length; i++) { 
            if(req.body.content.img[i]!=null)
            {
                frontcms.img[i]=req.body.content.img[i];
            }
          }
    Frontcms.findByIdAndUpdate(req.params.id, {$set: {img:frontcms.img}}, function (err, frontcms) {
        if (err) return next(err);
        res.send('Frontcms udpated.');
    });
});
};


exports.frontcms_delete = function (req, res) {
    Frontcms.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};