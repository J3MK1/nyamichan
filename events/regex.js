const Discord = require('discord.js')
const config = require('../settings/config.json')

module.exports = (client) => {

// Eventos de quando o BOT receber uma mensagem
client.on('message', async message => {
        // Verificação de links de outros canais do Discord.
        try{
            const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
            if (regex.exec(message.content)){
                await message.delete({timeout: 1000});
                    return await message.channel.send(`${message.author} **Uh...You cannot post links from other servers on this server!**`);
            }
        } catch (err) {
            console.error(err);
        }

    });
}