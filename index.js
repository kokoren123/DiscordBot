const Discord = require('discord.js')
const client = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES'] } });
const config = require('./config.json')


const command = require('./command')
const welcome = require('./commands/welcome')
const messagecounter = require('./commands/message-counter')
const mongo = require('./mongo')
const messages = require('./commands/messages')
const eval = require('./commands/eval')
const kick = require('./commands/kick')
const ban = require('./commands/ban')
const serveinfo = require('./commands/server-info')
const clearchannel = require('./commands/clear-channel')
const warn = require('./commands/warn')
const lw = require('./commands/lw')
const slow = require('./commands/slowmode')
const gr = require('./commands/give-role')
const cw = require('./commands/clear-warns')
const help = require('./commands/help')
const dm = require('./commands/DM')
const avatar = require('./commands/avatar')
const clear = require('./commands/clear')
const userinfo = require('./commands/user-info')
const mc = require('./commands/mc')
const botinfo = require('./commands/bot-info')
const wanted = require('./commands/wanted');
const hitler = require('./commands/hitler');

client.on('ready', async () => {
  console.log('The client is ready!')


  welcome(client);
  messagecounter(client);
  messages(client);
  eval(client);
  ban(client);
  kick(client);
  serveinfo(client);
  clearchannel(client);
  warn(client);
  lw(client);
  slow(client);
  gr(client);
  cw(client);
  help(client);
  dm(client);
  avatar(client);
  clear(client);
  userinfo(client);
  mc(client);
  botinfo(client);
  wanted(client);
  hitler(client);


  await mongo().then((mongoose) => {
    try{
      console.log('connected to mongo')
    }
    finally{
    }
  })


  command(client, 'ping', (message) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })  })
    
})

client.login(config.token)