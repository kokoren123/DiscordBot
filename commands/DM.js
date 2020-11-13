const command = require('../command')

module.exports = (client) => {
    command(client, ['dm', 'DM'], (message) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to do this!');
        let member = message.mentions.members.first();
        if(!member) {
          message.reply('please mention someone to ping.')
          return
        }
        var messageArray = message.content.split(" ");
        if (!messageArray[1]) return message.reply('what to DM? \n !dm <@member> <message>')
        let MSG = messageArray.slice(2).join(" ")
        if (!MSG[1]) return message.reply('what to DM? \n !dm <@member> <message>')
        member.send(MSG)
        message.channel.send(`i send to ${member} the message`)
    })
}