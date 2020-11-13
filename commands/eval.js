const command = require('../command')
const ownerId = '483660208145432596' // my discord user ID

module.exports = (client) => {
    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

  command(client, 'eval', (message) => {
    const { member, channel, content } = message

    if (member.id === ownerId) {
        const args = message.content.split(" ").slice(1);
          try {
            const code = args.join(" ");
            let evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
       
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
    }
  })
}