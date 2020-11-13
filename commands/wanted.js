 const command = require('../command');
 const canvacord = require('canvacord')
 const canva = new canvacord();
 const Discord = require('discord.js')
 const { prefix } = require('../config.json')

   module.exports = (client) => {

  command(client, 'wanted', async message => { 
 const args = message.content.slice(prefix.length).trim().split(' ');
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.join(" ") || x.user.username === args[0]);
    let avatar = member ? member.user.displayAvatarURL({ dynamic: false, format:"png" }) : message.author.displayAvatarURL({ dynamic: false, format:"png" } )
    let image = await canva.wanted(avatar);
    let attachment = new Discord.MessageAttachment(image, "wanted.png");
    return message.channel.send(attachment);
  })
 }