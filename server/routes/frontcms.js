var express = require('express');
var router = express.Router();
const multer = require('multer');
// Require the controllers WHICH WE DID NOT CREATE YET!!
var frontcms_controller = require('../controllers/frontcms');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.jpg');
    }
  });
   
  var upload = multer({ storage: storage });

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', frontcms_controller.test);


router.post('/create', frontcms_controller.frontcms_create);

router.post('/uploadimages', upload.array('media', 6), frontcms_controller.frontcms_uploadimages);

router.get('/getAll', frontcms_controller.frontcms_alls);

router.get('/:id', frontcms_controller.frontcms_details);

router.post('/update/:id', frontcms_controller.frontcms_update);
router.post('/updateimages/:id', frontcms_controller.frontcms_updateimages);

router.delete('/:id/delete', frontcms_controller.frontcms_delete);


module.exports = router;