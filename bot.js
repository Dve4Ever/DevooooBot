
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.channel.send('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.channel.send('?purge 1');
    }
});

client.on('message', message => {
    if (message.content === 'pee is stored in the balls') {
    	message.channel.send('Hey! Thats racist!');
    } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
