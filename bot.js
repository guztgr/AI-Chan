// require ==================================================
const Discord = require("discord.js");
const config  = require("./config.json");
//const fs      = require("fs");
const client  = new Discord.Client();
const args    = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
//===========================================================

// console ==================================================
client.on('ready', () => {
    console.log('I am ready!');
});
// response command =========================================
client.on("message", (message) => {
    // ====================================================== start the code here
    if(message.content.startsWith(prefix+'command') || message.author.bot) return;
  //=========================================================
  //============================================================
    //!ping
if(command === 'ping') {
    message.channel.send('Pong!');
  } else
    //!foo
  if (command === 'foo') {
    message.channel.send('Bar!');
  } 
      // =================================
  });
// ini akses token ==========================================
// masuk ke pengaturan heroku setting "BOT_TOKEN : token"
client.login(config.token);
//============= end code =====================================
