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
    if (message.content === 'devo') {
    	message.channel.send('**DEVOOOO**');
    } 
})

client.on('message', message => {
    if (message.content === 'Whats 9+10') {
    	message.channel.send('21!');
    }
});

client.on('message', message => {
    if (message.content === 'your mum gay') {
    	message.channel.send('NO, YOU!');
    }
});

client.on('message', message => {
    if (message.content === 'Retarted') {
    	message.channel.send('Watch your Profanity!');
    }
});

client.on('message', message => {
    if (message.content === 'pee is stored in the balls') {
    	message.channel.send('Hey! Thats racist!');
    } 
});

client.on('message', message => {
    if (message.content === 'weapon') {
    	message.channel.send('Thats classified as an weapon!')
  	}
});

client.on('message', message => {
    if (message.content === 'bob') {
    	message.channel.send('Bob likes minecraft, and fortnite, and sims. Be like bob.');
    } 
})

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
