const command = require('../command')

module.exports = (client) => {
    command(client, 'kick', (message) => {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            const targetKick = message.mentions.users.first()
    
            if(!targetKick) {
                message.reply('please mention someone to kick')
            }
            if(targetKick) {
                const targetMemberKick = message.guild.members.cache.get(targetKick.id)
                if(message.member === targetMemberKick) {
                    message.reply(`you can't kick yourself.`)
                }else{
                targetMemberKick.kick()
                message.channel.send(`${targetMemberKick} is kicked`)
                }
        }
        }else{
            message.channel.send(`<@${message.member.id}> you don't have perms to do that`)
        }
    })
}