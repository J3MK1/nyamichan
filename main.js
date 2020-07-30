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
    console.log('Nyami-chan was deployed successful!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!command === 'aboutme'){
        client.commands.get('aboutme').execute(message, args);
    } else if(!command == 'email'){
        client.command.get('email').execute(message, args);
    } 
});


client.login('NzM4NTEzODA0ODgyNjA4MjMx.XyNAlA.CYAMuJmNqnsRuavvTGMkNBXnedY');