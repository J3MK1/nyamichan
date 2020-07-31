const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

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

client.on('message' , message =>{
    
    if (message.content == 'roll') 
    {
        function between(min,max)
        var roll =(Math.floor(Math.random())* (max - min + 1) + min);
        if (roll == 1)
        {
            message.reply('Wowza!');
        }
        else if (roll == 2)
        {
            message.reply('lol1!', roll);
        }
        else if (roll == 3)
        {
            message.reply('lol2!');
        }        else if (roll == 4)
        {
            message.reply('lol3!');
        }        else if (roll == 5)
        {
            message.reply('lol4!');
        }        else if (roll == 6)
        {
            message.reply('lol!5');
        }        else if (roll == 7)
        {
            message.reply('lol!6');
        }        else if (roll == 8)
        {
            message.reply('lol!7');
        }        else if (roll == 9)
        {
            message.reply('lol!8');
        }
        else
        {
            message.reply('lol!9');
        }
    }
}); 

console.log(
    between(0,9)
)

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