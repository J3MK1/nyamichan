const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

const welcomeChannelId = '738567304065056859' // Welcome Channel ID

const exitChannelId = '793221742033371176' // Exit Channel ID

const discussionId = '716316265823600730' // Discussion Channel ID

const getyourroleId = '739729945240272926' // Role Channel ID

const botcommandsId = '739731647577981008' // Bot Commands Channel ID

const listenerRole = '719289193779691530' // Listener Channel ID

const challengerRole = '719289140805369898' // Challenger Channel ID
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.on('guildMemberAdd', (member) => {
    console.log(member)

    const welcomeMsg = `Heey, welcome to our server <@${member.id}>! I'm Nyami-chan, the Mei Lin Draws's Assistant! \n\n If you want to be notified of future announcements, go to ${member.guild.channels.cache.get(getyourroleId).toString()} and and if you have any questions, go to ${member.guild.channels.cache.get(botcommandsId).toString()} maybe I can help you! ヽ(o＾▽＾o)ノ`
    
    const cacheWelcomeId = member.guild.channels.cache.get(welcomeChannelId)

    cacheWelcomeId.send(welcomeMsg)
})

client.on('guildMemberRemove', (member) =>{
    const byeMsg = `Good bye <@${member.id}>!`

    const cacheExitId = member.guild.channels.cache.get(exitChannelId)

    cacheExitId.send(byeMsg)
})

client.on('message' , message =>{
    if (message.content == '!joke') 
    {
        var roll =(Math.floor(Math.random()*7 + 1));
        if (roll == 1)
        {
            message.reply('I bought a dalek egg timer recently. After three minutes, it shouts “Eggs Terminate!');
        }
        else if (roll == 2)
        {
            message.reply('what do you call a pile of kittens? ||A meowntain!||');
        }
        else if (roll == 3)
        {
            message.reply('why cant two doctors be together? ||Because that would be a “Pair-o-docs.||');
        }        
        else if (roll == 4)
        {
            message.reply('traveling on a flying carpet is a rugged experience.');
        }
        else if (roll == 5)
        {
            message.reply('what do you call a kitten in a earthquake? ||A cat-astrophe!||');
        } 
        else if (roll == 6)
        {
            message.reply('did the cat drop the bass? ||Youve got to be kitten me!!||');
        } 
        else if (roll == 7)
        {
            message.reply('what is the hardest cake ever made? ||It is the Complicake!||');
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
        message.reply('now you will know everything my master is doing! (ﾉ◕ヮ◕)ﾉ');
        message.member.roles.add(listenerRole);
    }
    else if(message.content == '!challenger'){
        message.reply('so do you like to challenge yourself? Okay, here is your challenger stamp! Enjoy! (=^v^=)');
        message.member.roles.add(challengerRole);
    }

})

client.login(process.env.token)