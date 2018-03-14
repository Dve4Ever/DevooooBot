const Discord = require('discord.js');
const client = new Discord.Client();
let hasPerms = require("../helpers.js").hasPerms;
let inPrivate = require("../helpers.js").inPrivate;

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
})

client.on('message', message => {
    if (message.content === 'Whats 9+10') {
    	message.channel.send('21!');
  	}
});

client.on('message', message => {
    if (message.content === 'your mum gay') {
    	message.channel.send('Yours is too!');
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

exports.commands = [
  "purge" // command that is in this file, every command needs it own export as shown below
];

exports.purge = {
  usage: "<number of messages>",
  description: "Deletes Messages",
  process: function(bot, msg, suffix) {
    if (inPrivate(msg)) {
      msg.channel.send("You Cant Purge Message In DM's!");
      return;
    }
    if (hasPerms(msg)) {
      if (!suffix) {
        var newamount = "2";
      } else {
        var amount = Number(suffix);
        var adding = 1;
        var newamount = amount + adding;
      }
      let messagecount = newamount.toString();
      msg.channel
        .fetchMessages({
          limit: messagecount
        })
        .then(messages => {
          msg.channel.bulkDelete(messages);
          // Logging the number of messages deleted on both the channel and console.
          msg.channel
            .send(
              "Deletion of messages successful. \n Total messages deleted including command: " +
                newamount
            )
            .then(message => message.delete(5000));
          console.log(
            "Deletion of messages successful. \n Total messages deleted including command: " +
              newamount
          );
        })
        .catch(err => {
          console.log("Error while doing Bulk Delete");
          console.log(err);
        });
    } else {
      msg.channel
        .send("only moderators can use this command!")
        .then(message => message.delete(5000));
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
