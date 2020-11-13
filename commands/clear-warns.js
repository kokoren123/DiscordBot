const mongo = require('../mongo')
const command = require('../command')
const warnSchema = require('../schemas/warn-schema')

module.exports = async (client) => {
    command(client, 'clear-warns', async (message) => {
      if (message.member.hasPermission('ADMINISTRATOR')) {
      const { content } = message
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to clear the warns for.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

    await mongo().then(async (mongoose) => {
      try {
        await warnSchema.findOneAndDelete(
          {
            guildId,
            userId,
          },
        )
      } finally {
      }
    })
  }
  })
}