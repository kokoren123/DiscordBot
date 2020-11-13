const mongo = require('../mongo')
const command = require('../command')
const warnSchema = require('../schemas/warn-schema')
const { prefix } = require('../config.json')

module.exports = async (client) => {
    command(client, 'warn', async (message) => {
      if (message.member.hasPermission('ADMINISTRATOR')) {

      const { content } = message
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to warn.')
      return
    }

    const arguments = content.split(/[ ]+/)
    

    const guildId = message.guild.id
    const userId = target.id
    const reason = arguments.slice(2).join(" ")

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }

    await mongo().then(async (mongoose) => {
      try {
        await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
          }
        )
      } finally {
      }
    })
    message.channel.send(`i warned ${target.tag}`)
  }
  })
}