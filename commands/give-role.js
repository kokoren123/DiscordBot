const command = require('../command')
const { prefix } = require('../config.json')
const Discord = require('discord.js')

module.exports = (client) => {

    command(client, ['give-role', 'gr', 'giverole'], (message) => {
      if (message.member.hasPermission('ADMINISTRATOR')) {
        const { content, guild, mentions,channel, member } = message
        const arguments = content.split(/[ ]+/)

    const targetUser = mentions.users.first()
    if (!targetUser) {
      message.reply('Please specify someone to give a role to.')
      return
    }



    const roleName = arguments[2]

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.reply(`There is no role with the name "${roleName}"`)
      return
    }

    const member1 = guild.members.cache.get(targetUser.id)
    member1.roles.add(role)
    
    message.reply(`that user now has the "${roleName}" role`)
  }
    })
}