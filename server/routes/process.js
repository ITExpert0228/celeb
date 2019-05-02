"use strict";

var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var processCtrl = require('../controllers/process');


// a simple test url to check that all of our files are communicating correctly.


router.post('/save', processCtrl.process_save);

router.get('/getAll', processCtrl.process_alls);


router.post('/update/process/:id', processCtrl.process_process_update);

router.post('/update/privacy/:id', processCtrl.process_privacy_update);

router.post('/update/cookie/:id', processCtrl.process_cookie_update);

router.delete('/:id/delete', processCtrl.process_delete);


module.exports = router;