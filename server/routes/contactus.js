var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var contactus_controller = require('../controllers/contactus');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', contactus_controller.test);


router.post('/create', contactus_controller.contactus_create);

router.get('/getAll', contactus_controller.contactus_alls);
router.get('/setAll', contactus_controller.contactus_setalls);


router.get('/:id', contactus_controller.contactus_details);

router.put('/:id/update', contactus_controller.contactus_update);

router.delete('/:id/delete', contactus_controller.contactus_delete);


module.exports = router;