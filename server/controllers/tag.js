var Tag = require('../models/tag');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.tag_create = function (req, res) {
    res.send('d');
};

exports.tag_details = function (req, res) {
    Tag.findById(req.params.id, function (err, tag) {
        if (err) return next(err);
        res.send(tag);
    })
};


exports.tag_alls = function (req, res) {
    Tag.find({}).then((tag) => {
        //console.log(tag);
         res.status(200).send(tag);
     }).catch((err) => {
         res.status(404).send();
    });

};
exports.tag_setalls = function (req, res) {
    var tag = new Tag(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    tag.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Tag Created successfully');
    })

};

exports.tag_update = function (req, res) {
    Tag.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, tag) {
        if (err) return next(err);
        res.send('Tag udpated.');
    });
};

exports.tag_delete = function (req, res) {
    Tag.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};