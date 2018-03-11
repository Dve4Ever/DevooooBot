const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    print('Eingeloggt als')
    print(client.user.name)
    print(client.user.id)
    print('-----------')
await client.change_presence(game=discord.Game(name="on devoooo.weebly.com/discordbot.html"))
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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
