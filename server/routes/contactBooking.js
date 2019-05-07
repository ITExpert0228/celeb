var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var contactBooking_controller = require('../controllers/contactBooking');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', contactBooking_controller.test);


router.post('/create', contactBooking_controller.contactBooking_create);

router.get('/getAll', contactBooking_controller.contactBooking_alls);

router.get('/getAllbyCate', contactBooking_controller.contactBooking_allsbycate);


router.get('/setAll', contactBooking_controller.contactBooking_setalls);

router.post('/deleteContent', contactBooking_controller.contactBooking_deletebyid);

router.get('/getmodel', contactBooking_controller.contactBooking_details);

router.put('/:id/update', contactBooking_controller.contactBooking_update);

router.delete('/:id/delete', contactBooking_controller.contactBooking_delete);


module.exports = router;