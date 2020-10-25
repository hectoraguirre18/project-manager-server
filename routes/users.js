var express = require('express');
var router = express.Router();
var controller = require('../controllers/users.js')

/* GET users listing. */
router.get('/', controller.list);

router.get('/:id', controller.index);

router.post('/', controller.create );

router.put('/', controller.update );

router.delete('/', controller.destroy);

module.exports = router;
