const command = require('../command')
const { MessageEmbed } = require('discord.js')

module.exports = async (client) => {
    command(client, ['bot-info', 'botinfo', 'bi'], async (message) => {
        let totalMembers = message.guild.memberCount
    
        const embed = new MessageEmbed()
          .setAuthor(
            `Information about the ${client.user.username} Bot`,
            client.user.displayAvatarURL()
          )
          .addFields(
            {
              name: 'Bot tag',
              value: client.user.tag,
            },
            {
              name: 'Time since last restart',
              value: `${process.uptime().toFixed(2)}s`,
            },
            {
              name: 'Server count',
              value: client.guilds.cache.size,
            },
            {
              name: 'Total members',
              value: totalMembers,
            }
          )
    
        message.channel.send(embed)
    })
}