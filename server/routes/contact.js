var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var contact_controller = require('../controllers/contact');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', contact_controller.test);


router.post('/create', contact_controller.contact_create);

router.get('/getAll', contact_controller.contact_alls);

router.get('/getAllbyCate', contact_controller.contact_allsbycate);


router.get('/setAll', contact_controller.contact_setalls);

router.post('/deleteContent', contact_controller.contact_deletebyid);

router.get('/getmodel', contact_controller.contact_details);

router.put('/:id/update', contact_controller.contact_update);

router.delete('/:id/delete', contact_controller.contact_delete);


module.exports = router;