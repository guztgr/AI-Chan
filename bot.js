// require ==================================================
const Discord = require("discord.js");
const config  = require("./config.json");
const fs      = require("fs")
const client  = new Discord.Client();
//===========================================================

// console ==================================================
client.on('ready', () => {
    console.log('I am ready!');
});
// response command =========================================
client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
    if (message.content.startsWith(config.prefix + "ping")) {
      message.channel.send("pong!");
    } else
    if (message.content.startsWith(config.prefix + "foo")) {
      message.channel.send("bar!");
    }
  });
// ini akses token ==========================================
// masuk ke pengaturan heroku setting "BOT_TOKEN : token"
client.login(config.token);
//============= end code =====================================
