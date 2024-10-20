// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controllers
const messageController = require('./../../../controllers/api/v1/messages');

// Define routes
router.get('/', messageController.getAllMessages);

router.get('/:id', messageController.getMessageByID);

router.post('/', messageController.createMessage);

router.put('/:id', messageController.updateMessage);

router.delete('/:id', messageController.deleteMessage);

// Export router
module.exports = router;