const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
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
    }
});

client.login(process.env.token)