/* Discord */
const { Client, Intents, ApplicationCommandOptionType } = require('discord.js');
global.client = new Client({ intents: ['GUILDS', 'GUILD_WEBHOOKS', 'GUILD_VOICE_STATES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS'] });
config = require("./config.json");

/* Setup */
client.on("ready", () => {
    // on bot ready
    registerCommands();
});

/* New Slash Command */
client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return; // ignore non-slash commands
    switch(interaction.commandName) {
        case "ping":
            // Send pinging message
            interaction.reply({ content: "✳ Ping", fetchReply: true, ephemeral: true })
            .then(m => {
                // Get values
                let latency = m.createdTimestamp - interaction.createdTimestamp;
                let ping = Math.round(client.ws.ping);
                interaction.editReply("✅ Pong! Latency is " + latency + "ms. API Latency is " + ping + "ms");
            })
        break;
        case "solve":
            interaction.reply({ content: "test", fetchReply: true, ephemeral: true })
        break;
    }
})

/* Register Slash Commands */
function registerCommands() {
    client.application?.commands.create({
        name: 'ping',
        description: 'Gives the ping of the bot, and checks if the bot is running.'
    });
    client.application?.commands.create({
        name: 'solve',
        description: 'Try to solve the WWRdle.',
        options: [
            {
                type: "STRING",
                name: "role",
                description: "The name of a role.",
                required: true
            }
        ]
    });
}


/* util */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

/* 
	LOGIN
*/
client.login(config.token);
