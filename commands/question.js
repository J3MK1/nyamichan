exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('FAQ')
        .setColor('#FFB6C1')
        .setDescription('*So you want to know my master`s secrets? I dont know! If I knew I would be called Mei Lin Draws!*\n\n*Welp... she left me a scroll but it is written in a language I dont understand, maybe it can help you*: http://fav.me/ddtxkhc')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('FAQ of MeiLin Draws')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}