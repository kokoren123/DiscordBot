const command = require('../command')

module.exports = (client) => {

command(client, 'ban', (message) => {
    if (message.member.hasPermission('BAN_MEMBERS')) {
        const targetBan = message.mentions.users.first()

        if(!targetBan) {
            message.reply('please mention someone to ban')
        }
        if(targetBan) {
            const targetMemberBan = message.guild.members.cache.get(targetBan.id)
            if(message.member === targetMemberBan) {
                message.reply(`you can't ban yourself.`)
            }else{
            targetMemberBan.ban()
            message.channel.send(`${targetMemberBan} is banned`)
            }
    }
    }else{
        message.channel.send(`<@${message.member.id}> you don't have perms to do that`)
    }
})

}