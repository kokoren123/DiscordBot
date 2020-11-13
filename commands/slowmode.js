const command = require('../command')
const { prefix } = require('../config.json')
const Discord = require('discord.js')
module.exports = (client) => {

    command(client, ['slow', 'slowmode'], (message) => {
        let args = message.content.substring(prefix.length).split(" ");

        if (message.member.hasPermission("MANAGE_MESSAGES"))
        {
          noargsembed = new Discord.MessageEmbed()
          .setDescription(`**${message.author.username}**, The Current Slowmode is: **${message.channel.rateLimitPerUser}**.`)
          .setColor('DARK_GRAY')
          
        if (!args[1]) return message.channel.send(`${message.author}`,
        noargsembed)
        if(isNaN(parseInt(args[1]))) 
        {
        return message.channel.send(`${message.author},`,
        notnumberembed)
        }
        
        notnumberembed = new Discord.MessageEmbed()
        .setTitle(`That's not a number!`)
        .setDescription(`**${message.author}**, Please provide a number and try again!`)
        .setColor('DARK_GRAY')
      
      
      
        slowmodeembed = new Discord.MessageEmbed()
        .setTitle(`SlowMode Changed!`)
        .setDescription(`**${message.author}**, SlowMode is now set to: **${args[1]}**`)
        .setColor('#ff7f27')
      
      
      
      
      
      
        cantslowmode = new Discord.MessageEmbed()
        .setTitle(`You can't use that, try again later.`)
        .setDescription(`**${message.author}**, No, You don't have permission to set the slowmode!`)
        .setColor('#1b1c1c')
      
        message.channel.setRateLimitPerUser(args[1])
        message.channel.send(`${message.author}`,
        slowmodeembed)
        }
      
          if (!message.member.hasPermission("MANAGE_MESSAGES"))
          {
            return message.channel.send(`${message.author}`, 
            cantslowmode)
          }
    })
}