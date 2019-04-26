var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var tag_controller = require('../controllers/tag');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', tag_controller.test);


router.post('/create', tag_controller.tag_create);

router.get('/getAll', tag_controller.tag_alls);

router.get('/:id', tag_controller.tag_details);

router.put('/:id/update', tag_controller.tag_update);

router.delete('/:id/delete', tag_controller.tag_delete);


module.exports = router;