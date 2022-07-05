const { Router } = require('express');

const router = Router();

router.get('/', renderTips);
router.get('/', renderFeedback);

module.exports = router;