const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    
    let botStatus = [
        
        `with ${client.users.cache.size} others!`,
        
    ]
    
    setInterval(function() {
        let status = botStatus[Math.floor(Math.random() * botStatus.length)];
        client.user.setActivity(status, {type: 'PLAYING'})
    }, 5000);

    console.log(`${client.user.username} is online!`)
})

client.login('MTAxNjc4MTQ1MjEyNzUxODgwMQ.G8juzC.AF0-ebdAX8tQ3pA2GrV4jIuGtuqsHsyGIqO9D0')