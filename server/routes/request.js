var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var request_controller = require('../controllers/request');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', request_controller.test);


router.post('/create', request_controller.request_create);

router.get('/getAll', request_controller.request_alls);

router.get('/getAllbyCate', request_controller.request_allsbycate);


router.get('/setAll', request_controller.request_setalls);

router.post('/deleteContent', request_controller.request_deletebyid);

router.get('/getmodel', request_controller.request_details);

router.put('/:id/update', request_controller.request_update);

router.delete('/:id/delete', request_controller.request_delete);


module.exports = router;