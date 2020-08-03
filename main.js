const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

const channelId = '738567304065056859' // welcome Id

const discussionId = '716316265823600730' // discussion Id

const listenerRole = '719289193779691530' // listener Id

const challengerRole = '719289140805369898' // challenger Id
 
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
    if (message.content == '!joke') 
    {
        var roll =(Math.floor(Math.random()*5));
        if (roll == 1)
        {
            message.reply('I once knew a joke but *hmpf~ now how did it go?');
        }
        else if (roll == 2)
        {
            message.reply('my master didnt tell me that I would have to tell jokes ... I am good at messing up!!');
        }
        else if (roll == 3)
        {
            message.reply('once a woman arrived with a very angry face with brown hair and cat ears and... w-what are you doing here Kinatsu?!');
        }        
        else
        {
            message.reply('Kitty, do you have a joke for him? *meoow~ Oh. Well, its not the time Kitty! ~~Lets just keep that to ourselves.~~ :x');
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
    }else if (command == 'aboutme'){
        client.commands.get('aboutme').execute(message, args);
    }
});

client.on('message', message => {

    if(message.content == '!listener'){
        message.reply('now you will know everything my master is doing! :D');
        message.member.roles.add(listenerRole);
    }
    else if(message.content == '!challenger'){
        message.reply('so do you like to challenge yourself? Okay, here is your challenger stamp! Enjoy! (=^v^=)');
        message.member.roles.add(challengerRole);
    }

})

client.login(process.env.token)