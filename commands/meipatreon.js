const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('Patreon')
        .setColor('#FFB6C1')
        .setDescription('*So you are undecided about becoming meilindraws patron? Ah, it is really cool! It`s just for those who like to have fun, just like me, if I were older I could be her patron...oh, before I start talk over and over, she left this message to you:*\n\n "Hello! It`s Mei Lin Draws! In my Patreon, you will have access to exclusive events like:\n\n**- "Creating Characters with Music":** in this event I will create a character based on the music that patrons suggest to me!\n\n**- "Creating Characters with Your Suggestions":** in this event each patron will suggest aspects of the character such as hair, eyes, gender and based on patron suggestions I will be giving life to a new character!\n\n**- "Creating a SuperHero with Your Suggestions":** the characters created will be based entirely on patrons suggestions, in addition, the created hero will have a mini story, which will also be suggested by them and then it will be published in our league of heroes!\n\n**- "Waifu Giveaway":** every month I will do a giveaway which you can win an exclusive character design made by me!\n\n**- "Hall of Fame / Waifu of the Month":** if you have a character and want to see it on our hall of fame, seen by all, what are you waiting for? Character Design Contest entitled to the Hall of Fame! It can be a Character create by me, you or some artist.\n\n Want to know more? https://www.patreon.com/meilindraws \n Thank you for your interest! <3')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('MeiLin Draws Patreon.')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}