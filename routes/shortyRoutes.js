const express = require('express');
const router = express.Router();

const shorty_controller = require('../controller/shortyControllers');

router.post('/api/v1/url', shorty_controller.create_redirect_post);
router.get('/:id', shorty_controller.run_redirect_get);

module.exports = router;