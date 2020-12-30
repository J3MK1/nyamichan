const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('Commissions')
        .setColor('#FFB6C1')
        .setDescription('*My master left this message to you:* \n\n "I was going to open in the early July 2020 but due to my recent open project (Patreon) having to postpone and for **I dont know exactly when yet**, I will be receiving only a few orders for people who had already asked for a slot months ago, I hope you understand and Im sorry for the unforeseen, I dont like working rushing and make a low-quality job. \n\n For the **Character Design**. I will also be **temporarily closing** to avoid waiting 2+ months on the part of you, as client, as I know it is annoying to wait so long to receive the character so expected.\n\n If you want to know more about check this link: http://fav.me/ddtxkh8')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Commissions of MeiLin Draws.')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}