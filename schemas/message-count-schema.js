const mongoose = require('mongoose')

const messageCountSchema = mongoose.Schema({
  // The Database ID
  _id: Number,
    
  // The user ID
  // How many messages they have sent
  messageCount: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('message-counts', messageCountSchema)