const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// ini akses token ===================================
// masuk ke pengaturan heroku setting "BOT_TOKEN : token"
client.login(process.env.BOT_TOKEN);
