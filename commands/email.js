exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('Official Email')
        .setColor('#FFB6C1')
        .setDescription('*Nhaaa! I can help you! ♪ ~*\n\n*The email of my master is* **meilin.draws@gmail.com**')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Official email of MeiLin Draws.')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}