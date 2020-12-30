const Discord = require('discord.js')
const config = require('../settings/config.json')

module.exports = (client) => {
// Eventos de quando o BOT receber uma mensagem
client.on('message', async message => {

        // Verificação de prefixo e comandos
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix)) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

        const args = message.content.slice(config.prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        try {
            const commandFile = require(`../commands/${command}.js`)
            commandFile.run(client, message, args);
        } catch (err) {
            console.error(err);
        }

    });
}