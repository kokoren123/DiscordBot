const command = require('../command')
const Discord = require('discord.js')

module.exports = (client) => {

command(client, ['av', 'avatar'], (message) => {

const AvatarEmbed2 = new Discord.MessageEmbed()
.setTitle('Your avatar:')
.setColor('#0099ff')
.setImage(message.author.displayAvatarURL({dynamic : true}))
message.channel.send(AvatarEmbed2);
}
)}