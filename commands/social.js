exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('Social Media')
        .setColor('#FFB6C1')
        .setDescription('*It is easy! How you dont know your fool !? I am just kidding, I was imitating Kinatsu she would say something like that hah* \n > MeiLin Draws Social Media: \n\n ● Patreon: https://www.patreon.com/meilindraws  \n ● Deviantart: https://www.deviantart.com/meilindraws \n ● Youtube:https://www.youtube.com/channel/UCP9TfHKQzsIAc9Z9IMyQ6eA/?guided_help_flow=5 \n ● Twitter: https://twitter.com/meilindraws \n ● Instagram: https://www.instagram.com/meilin.draws/ \n ● Facebook: https://www.facebook.com/meilindraws01/ \n ● FurAffinity: https://www.furaffinity.net/user/meilindraws/ \n\n *I think that is all... I wonder why my master has so much social media...?*')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('MeiLin Draws Social Media')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}