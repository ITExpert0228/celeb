var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var celebdata_controller = require('../controllers/celebdata');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', celebdata_controller.test);


router.post('/create', celebdata_controller.celebdata_create);

router.get('/getAll', celebdata_controller.celebdata_alls);

router.get('/getAllbyCate', celebdata_controller.celebdata_allsbycate);

router.get('/getAllbysitemap', celebdata_controller.celebdata_allsbysitemap);

router.get('/setAll', celebdata_controller.celebdata_setalls);


router.post('/saveContent', celebdata_controller.celebdata_saveContent);

router.get('/getmodelsbyname', celebdata_controller.celebdata_detailsbyname);
router.get('/getmodelsbyalphabeta', celebdata_controller.celebdata_detailsbyalphabeta);

router.get('/getmodel', celebdata_controller.celebdata_details);

router.get('/getmodelsbycate', celebdata_controller.celebdata_detailsbycate);
router.put('/:id/update', celebdata_controller.celebdata_update);

router.delete('/:id/delete', celebdata_controller.celebdata_delete);


module.exports = router;