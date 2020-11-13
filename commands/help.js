const command = require('../command')
const { prefix } = require('../config.json')

module.exports = (client) => {
command(client, 'help', (message) => {
    const Embed = new Discord.MessageEmbed()
    Embed.setTitle('help-list of commands')
    Embed.setDescription('')
    Embed.setColor('#000fff')
    Embed.addFields(
        { name: '• ban',
         value: 'baning a member, usage: !ban <@member>',
        },
        { name: '• nuke, cc, clearchannel, clear-channel',
        value: 'deleting all the messages in the channel, usage: !nuke/cc/clearchannel/clear-channel',
        },
        {
            name: '• clear-warns',
            value: 'clear all the warns of a member, usage: !clear-warns <@member>',
        },{
            name: '• give-role, gr, giverole',
            value: 'giving a role to a members, usage: !give-role/gr/giverole <@member> <role name>',
        },{
            name: '• kick',
            value: 'kick a memeber, usage: !kick <@memebr>',
        },{
            name: '• lw, list-warnings, list-warns, listwarnings, listwarns, warnings, warns',
            value: 'show you all the warnings of a memebr, usage: !lw/list-warnings/list-warns/listwarnings/listwarns/warnings/warns <@member>',
        },{
            name: '• serverinfo, si, server-info',
            value: 'show info about the server, usage: !serverinfo/si/server-info',
        },{
            name: '• slow, slowmode',
            value: 'set the sloemode of the channel, usage: !sloe/slowmode <number>',
        },{
            name: '• warn',
            value: 'warn a member, usage: !warn <@memebr> <reason>',
        },{
            name: '• setwelcome',
            value: 'set the welcome message and channel, you need to do this command in the welcome channel, usage: !setwelcome <message, "<@>" to ping the member>',
        },{
            name: '• dm, DM',
            value: 'dm to a member, usage: !dm/DM <@memeber> <message>',
        },{
            name: '• mc, membercount, member-count',
            value: 'show the guild member count, usage: !mc/membercount/member-count',
        },{
            name: '• av, avatar',
            value: 'show your avatar, usage: !av/avatar',
        },{
            name: '• ui, userinfo, user-info',
            value: 'show info about your user/the member you pinged, usage: !ui/userinfo/user-info <@member>'
        },{
            name: '• clear',
            value: 'clear the number of messages you said, usage: !clear <number>'
        },{
            name: '• bi, botinfo, bot-info',
            value: 'get info about the bot, usage: !bi/botinfo/bot-info'
        }
    )
    message.channel.send(Embed)
})
}