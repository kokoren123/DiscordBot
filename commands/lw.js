const mongo = require('../mongo')
const command = require('../command')
const warnSchema = require('../schemas/warn-schema')
const { prefix } = require('../config.json')

module.exports = async (client) => {
    command(client, ['lw', 'list-warnings', 'list-warns', 'listwarnings', 'listwarns', 'warnings', 'warns'], async (message) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify a user to load the warnings for.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

    await mongo().then(async (mongoose) => {
      try {
        const results = await warnSchema.findOne({
          guildId,
          userId,
        })

        let reply = `Previous warnings for <@${userId}>:\n\n`

        for (const warning of results.warnings) {
          const { author, timestamp, reason } = warning
          reply += `By ${author} on ${new Date(
            timestamp
          ).toLocaleDateString()} for "${reason}"\n\n`
        }

        message.reply(reply)
      } finally {
      }
    })
  })
}