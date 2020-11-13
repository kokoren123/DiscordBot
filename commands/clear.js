const command = require('../command')
const messageCountSchema = require('../schemas/message-count-schema')

module.exports = (client) => {
    command(client, 'clear', (message) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permission to do this!');
        const messageArray = message.content.split(" ");
        if (!messageArray[1]) return message.reply('How many messages to delete? \n !clear <number>')
        const MSG = messageArray.slice(1).join(" ")=
        message.delete().then(
          message.channel.bulkDelete(MSG)).then(message.channel.send(`i deleted ${MSG} messages.`).then(message => {
            message.delete({ timeout: 4000 })
          
          }))
    })
}