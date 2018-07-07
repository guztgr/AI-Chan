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
  //=========================================================
  // !ping
    if (message.content.startsWith(config.prefix + "ping")) {
      message.channel.send("pong!");
    } else 
    // !foo
    if (message.content.startsWith(config.prefix + "foo")) {
      message.channel.send("bar!");
    } else
    // !prefix
    if(message.content.startsWith(config.prefix + "prefix")) { 
        message.channel.send("eg. ``!prefix +`` it will take the ``+`` from it");
        // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
        let newPrefix = message.content.split(" ").slice(1, 2)[0];
        // change the configuration in memory
        config.prefix = newPrefix;
        // Now we have to save the file.
        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
      }
      //=====================================================
  });
// ini akses token ==========================================
// masuk ke pengaturan heroku setting "BOT_TOKEN : token"
client.login(config.token);
//============= end code =====================================
