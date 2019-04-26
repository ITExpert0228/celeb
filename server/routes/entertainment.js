var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var entertainment_controller = require('../controllers/entertainment');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', entertainment_controller.test);


router.post('/create', entertainment_controller.entertainment_create);

router.get('/getAll', entertainment_controller.entertainment_alls);
router.get('/getsAll', entertainment_controller.entertainment_all);
router.get('/getAllbycate', entertainment_controller.entertainment_allsbycate);

router.get('/getAllbycateforlocation', entertainment_controller.entertainment_allsbycateforlocation);

router.get('/getAllbyid', entertainment_controller.entertainment_allsbyid);
router.get('/:id', entertainment_controller.entertainment_details);

router.put('/:id/update', entertainment_controller.entertainment_update);

router.delete('/:id/delete', entertainment_controller.entertainment_delete);

router.post('/save', entertainment_controller.entertainment_save);
module.exports = router;