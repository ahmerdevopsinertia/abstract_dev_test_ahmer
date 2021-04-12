const express = require('express');
const {
  getAllTabs,
  addTab,
  updateTab,
  deleteTab,
} = require('../src/endpoint');

const router = express.Router();

// TODO Use the protect authorization 
// middleware to authorize the API endpoints
// using any available protocol such as JWT, OAuth or Custom build

// const { protect } = require('../src/middleware/authorization');
// router.use(protect);

router.get('/', getAllTabs);
router.post('/', addTab);
router.put('/:tabId', updateTab);
router.delete('/:tabId', deleteTab);

module.exports = router;
