// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controllers
const messageController = require('./../../../controllers/api/v1/messages');

// Define routes
router.get('/', messageController.getAllMessages);

router.post('/', messageController.createMessage);

// Export router
module.exports = router;