const command = require('../command')


module.exports = (client) => {

command(client, ['nuke', 'cc', 'clearchannel', 'clear-channel'], async (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.delete();
      const fetched = await message.channel.messages.fetch({limit: 99});
      message.channel.bulkDelete(fetched);
      }
      })
    }