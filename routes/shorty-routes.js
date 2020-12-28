const express = require('express');
const router = express.Router();

const shortyController = require('../controller/shorty-controllers');

router.get('/', shortyController.setupFormGet);
router.post('/api/v1/url', shortyController.createRedirectPost);
router.get('/:id', shortyController.runRedirectGet);

module.exports = router;
