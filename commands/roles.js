const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('Exclusive Roles')
        .setColor('#FFB6C1')
        .setDescription('Here is the Exclusive Roles of the server: <@719289193779691530>')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Informations about roles.')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}