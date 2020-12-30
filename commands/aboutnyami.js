const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('About Nyami-chan')
        .setColor('#FFB6C1')
        .setDescription('*So you want to talk? Yayy! I really like to talk, I can talk about anything all the time, every hour and -* \n\n~~Oops, my master said I need to control myself if not I couldnt be more her assistant...~~ \n\nOkay! *Lets go Nyami! You can do it! I am Nyami Harumi Kimura, I am only 10 years old and despite being small, everyone calls me "The Hurricane" in my village! I dunno why but it seems to be pretty cool and... Hey wait! My time isnt over, I want to talk more !! -* o(>< )o')
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Informations about Nyami-chan')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);

}