// require ==================================================
const Discord = require('discord.js');
const client  = new Discord.Client();
const prefix  = "!"; // Set the prefix
//===========================================================

// console ==================================================
client.on('ready', () => {
    console.log('I am ready!');
});
// response command =========================================
client.on("message", (message) => {
    // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;
  
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong!");
    } else
    if (message.content.startsWith(prefix + "foo")) {
      message.channel.send("bar!");
    }
  });
// ini akses token ==========================================
// masuk ke pengaturan heroku setting "BOT_TOKEN : token"
client.login(process.env.BOT_TOKEN);
//============= end code =====================================

