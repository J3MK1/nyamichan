const Discord = require('discord.js')

module.exports = (client) => {
    const welcomeChannelId = '738567304065056859' // Welcome Channel ID

    const exitChannelId = '793221742033371176' // Exit Channel ID
    
    const discussionId = '716316265823600730' // Discussion Channel ID
    
    const getyourroleId = '739729945240272926' // Role Channel ID
    
    const botcommandsId = '739731647577981008' // Bot Commands Channel ID
    
    client.on('guildMemberAdd', (member) => {
        console.log(member)
    
        const welcomeMsg = `Heey, welcome to our server <@${member.id}>! I'm Nyami-chan, the Mei Lin Draws's Assistant!\n\n If you want to be notified of future announcements, go to ${member.guild.channels.cache.get(getyourroleId).toString()} and and if you have any questions, go to ${member.guild.channels.cache.get(botcommandsId).toString()} maybe I can help you! ヽ(o＾▽＾o)ノ`
        
        const cacheWelcomeId = member.guild.channels.cache.get(welcomeChannelId)
    
        cacheWelcomeId.send(welcomeMsg)
    })
    
    client.on('guildMemberRemove', (member) =>{
        const byeMsg = `Good bye <@${member.id}>!`
    
        const cacheExitId = member.guild.channels.cache.get(exitChannelId)
    
        cacheExitId.send(byeMsg)
    })
}
