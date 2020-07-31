const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

var logger = require('winston');
var auth = require('./auth.json');

const channelId = '738567304065056859' // welcome Id

const discussionId = '716316265823600730' // discussion Id
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.on('guildMemberAdd', member =>{

    console.log(member)

    const channel = member.guild.channels.cache.get(channelId)

    channel.send(`Heey, welcome to our server ${member}, say hello to everyone in ${member.guild.channels.cache.get(discussionId).toString()}! I hope you have a lot of fun here! Yayy! :D`)
});

// Configure the array used for random replies
let replies = ["reply 1", "reply 2", "reply 3"];

// Configure the randomizer that will pick a random integer from 0 to the length of the array; used for array index
let random = Math.floor(Math.random() * replies.length);

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - ('+ bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with /
    if (message.substring(0, 1) == '/') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // /Hi
            case 'test1':
                bot.sendMessage({
                    to: channelID,
                    message: replies[random]
                });
        break;
        // Just add any case commands if you want to..
         }
     }
});
 
client.once('ready', () => {
    console.log('Nyami-chan BOT is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'aboutnyami'){
        client.commands.get('aboutnyami').execute(message, args);
    } else if (command == 'email'){
        client.commands.get('email').execute(message, args);
    } else if (command == 'social'){
        client.commands.get('social').execute(message, args);
    }else if (command == 'commission'){
        client.commands.get('commission').execute(message, args);
    }else if (command == 'question'){
        client.commands.get('question').execute(message, args);
    }else if (command == 'patreon'){
        client.commands.get('patreon').execute(message, args);
    }
});

client.login(process.env.token)