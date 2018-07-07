// require ==================================================
const Discord = require("discord.js");
const config  = require("./config.json");
const fs      = require("fs")
const args    = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const client  = new Discord.Client();
//===========================================================

// console ==================================================
client.on('ready', () => {
    console.log('I am ready!');
});
// response command =========================================
client.on("message", (message) => {
    if(message.content.startsWith(prefix+'command'))
    // ===
    if(command === 'ping') {
        message.channel.send('Pong!');
      } else
      if (command === 'blah') {
        message.channel.send('Meh.');
      }
      // =================================
  });
// ini akses token ==========================================
// masuk ke pengaturan heroku setting "BOT_TOKEN : token"
client.login(config.token);
//============= end code =====================================
