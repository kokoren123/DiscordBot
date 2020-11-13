const command = require('../command')

module.exports = (client) => {
    command(client, ['mc', 'membercount','member-count'], (message) => {
        message.channel.send(`the amonut of members in the guild is: ${message.guild.memberCount}`)
    })
}