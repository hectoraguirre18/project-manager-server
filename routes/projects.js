var express = require('express');
var router = express.Router();
var controller = require('../controllers/projects');

/* GET users listing. */
router.get('/', controller.list);

router.get('/id/:id', controller.index);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
