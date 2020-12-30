/** 
*   @author J3MK1
*   @license GNU-GPLv3
*   @file main.js
*/

const Discord = require('discord.js')

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL","REACTION"]})
const config = require('./settings/config.json')
const regex = require('./events/regex.js')
const welcome = require('./events/welcome.js')
const handler = require('./events/commandhandler.js')

client.once('ready', () => {
    console.log(client.user.tag +' has logged in');

    regex(client)
    welcome(client)
    handler(client)
})

// Evento de quando o BOT estiver pronto
client.on('ready', () => {

    /*
    Tipos de Atividades: WATCHING, LISTENING, PLAYING, STREAMING
    Status existentes: idle, dnd, online, invisible / OBS: Existe um delay de até 2 minutos até a alteração
    1000 milisegundos x 60 segundos (1 minuto) x 60 minutos x 3 horas
    */
    
        let playing = [
            `with my black cat!`
        ],
    
        i = 0;
        setInterval(() => client.user.setActivity(`${playing[i++ % playing.length]}`, {
          type: "PLAYING"
        }), 1000);
            client.user
              .setStatus("online")
              .catch(console.log);
})

client.login(process.env.token)