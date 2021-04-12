const express = require('express');
const {
  getAllTabs,
} = require('../src/service');

const router = express.Router();

// const { protect } = require('../src/middleware/authorization');

// router.use(protect);

router.get('/', getAllTabs);
// router.post('/login', login);
// router.post('/plogin', plogin);
// router.post('/votp', votp);

module.exports = router;
