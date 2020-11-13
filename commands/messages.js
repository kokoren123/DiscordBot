const mongo = require('../mongo')
const mongoose = require('mongoose')
const messageCountSchema = require('../schemas/message-count-schema')

module.exports = async (client) => {
    const command = require('../command')

    command(client, 'messages', async (message) => {

      const settings = await messageCountSchema.findOne({ _id: message.author.id });

      message.channel.send(message.author.toString() + " you have " + settings.messageCount + " messages.")
})
}