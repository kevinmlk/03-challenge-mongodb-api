// Include mongoose
const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

// Define a new schema
const messageSchema = new Schema({
  text: String,
  user: String,
});

const Message = mongoose.model('Message', messageSchema);

// Define functions
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find({ "user": "John" });
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

const createMessage = async (req, res) => {
  try {
    let message = new Message();
    message.text = "Hi, I'm John";
    message.user = "John";
  
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

// Export functions
module.exports = {
  getAllMessages,
  createMessage
};