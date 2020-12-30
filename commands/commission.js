const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('Commissions')
        .setColor('#FFB6C1')
        .setDescription('*My master left this message to you:* \n\n "It is closed now and I dont know when I will open to public but if you dont want to wait, I am opening Exclusive Commission Slots every month to my Patrons!\n *My Patreon:* https://www.patreon.com/meilindraws"')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Commissions of MeiLin Draws.')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}