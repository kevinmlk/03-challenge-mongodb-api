// Import model
const Message = require('../../../models/api/v1/Message');

// Define functions
const getAllMessages = async (req, res) => {
  try {
    let usernameFilter = {};

    if (req.query.username) {
      console.log('Username found: ' + req.query.username);
      usernameFilter.user = req.query.username;
    } else {
      console.log('No username found');
    }

    const messages = await Message.find(usernameFilter);
    res.json({
      "status": "success",
      "message": "GETTING messages",
      "data": {
        "messages": messages
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getMessageByID = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.json({
      "status": "success",
      "message": "GETTING message " + req.params.id,
      "data": {
        "message": message
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const createMessage = async (req, res) => {
  try {
    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;
  
    const savedMessage = await message.save();
    res.json({
      "status": "success",
      "message": "Message saved",
      "data": {
        "message": savedMessage
      }
    });

  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({
      "status": "success",
      "message": "Message updated",
      "data": {
        "message": message
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    res.json({
      "status": "success",
      "message": "Message deleted",
      "data": {
        "message": message
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// Export functions
module.exports = {
  getAllMessages,
  getMessageByID,
  createMessage,
  updateMessage,
  deleteMessage,
};