const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('About MeiLin Draws')
        .setColor('#FFB6C1')
        .setDescription('*So you want to know about my master? She left some scrolls with me after she arrived from her journey, maybe this could be useful for you!* \n\n **My Brief Bio:** http://fav.me/ddtpm54 \n **My Art Progress:** http://fav.me/ddtr0kn \n **My Gallery: **https://www.deviantart.com/meilindraws/gallery')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Informations about MeiLin Draws')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}