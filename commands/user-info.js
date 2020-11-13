const command = require('../command')
const Discord = require('discord.js')
module.exports = (client) => {

    command(client, ['ui', 'userinfo', 'user-info'], (message) => {
        const user1 = message.mentions.users.first()

        if(user1){
const Embed1 = new Discord.MessageEmbed()
.setTitle('userinfo')
.setColor('#0099ff')
.addField('name:', `${user1.username}`)
.addField(`nickname:`, `${user1.displayName}`)
.addField('id:', `${user1.id}`)
.setImage(user1.displayAvatarURL({dynamic : true}))
message.channel.send(Embed1);
        }
if(!user1){ 

var dateCreated = message.member.user.createdAt.toString()
var dateJoin = message.member.joinedAt.toString()
const Embed2 = new Discord.MessageEmbed()
.setTitle('userinfo')
.setColor('#0099ff')
.addField('name:', `${message.member.user.username}`)
.addField(`nickname:`, `${message.member.displayName}`)
.addField('id:', `${message.member.id}`)
.addField(` you joined to the server at: `, `${dateJoin}`)
.addField('you joined to discord at:', `${dateCreated}`)
.addField('you have', `${message.member.roles.cache.size} roles`)
.setImage(message.author.displayAvatarURL({dynamic : true}))
message.channel.send(Embed2);
}
})
}