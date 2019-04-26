var express = require('express');
var router = express.Router();
const multer = require('multer');
// Require the controllers WHICH WE DID NOT CREATE YET!!
var signup_controller = require('../controllers/signup');
// SET STORAGE
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
router.get('/test', signup_controller.test);

router.get('/check/:id', signup_controller.signup_check);
router.get('/delete/:id', signup_controller.signup_delete);
router.post('/create', signup_controller.signup_create);

router.get('/getAll', signup_controller.signup_alls);

router.post('/upload', upload.array('media', 10), signup_controller.media_upload);

router.get('/:id', signup_controller.signup_details);

router.put('/:id/update', signup_controller.signup_update);




module.exports = router;