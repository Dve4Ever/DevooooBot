const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === 'work') {
       message.reply('working');}});
client.on('message', message => {
    if (message.content === '!website') {
       message.reply('My Website is: https://staydevoooo.com);}});
client.on('message', message => {
    if (message.content === 'test') {
       message.reply('test');}});


client.login(process.env.BOT_TOKEN);
