const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var jokeArray = [
        'I bought a dalek egg timer recently. After three minutes, it shouts “Eggs Terminate!',
        'What do you call a pile of kittens? ||A meowntain!||',
        'Why cant two doctors be together? ||Because that would be a “Pair-o-docs.||',
        'Traveling on a flying carpet is a rugged experience.',
        'What do you call a kitten in a earthquake? ||A cat-astrophe!||',
        'Did the cat drop the bass? ||Youve got to be kitten me!!||',
        'What is the hardest cake ever made? ||It is the Complicake!||',
    ];
    var randomizer = Math.floor(Math.random() * jokeArray.length);
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
        .setTitle('Joke')
        .setColor('#31A2E6')
        .setDescription(jokeArray[randomizer])
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Jokes from the winners of the 1st Server Jokes contest!')
        .setAuthor(message.author.tag);
    await message.channel.send(embed);
}

exports.config = {
    name: "joke",
    description: "A command with random jokes",
    aliases: ["piada-nyami"]
}