const express = require('express');
const router = express.Router();

const shorty_controller = require('../controller/shortyControllers');

router.get('/', shorty_controller.setup_form_get);
router.post('/api/v1/url', shorty_controller.create_redirect_post);
router.get('/:id', shorty_controller.run_redirect_get);

module.exports = router;