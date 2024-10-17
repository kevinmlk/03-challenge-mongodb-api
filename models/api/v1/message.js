// Include mongoose
const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

// Define a new schema
const messageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: String,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
