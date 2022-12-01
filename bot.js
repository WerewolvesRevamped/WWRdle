/* Discord */
const { Client, Intents, ApplicationCommandOptionType } = require('discord.js');
global.client = new Client({ intents: ['GUILDS', 'GUILD_WEBHOOKS', 'GUILD_VOICE_STATES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS'] });
config = require("./config.json");

/* Setup */
var topRow = "";
client.on("ready", () => {
    // on bot ready
    registerCommands();
    updateAnswer(roleData[Math.floor(Math.random() * roleData.length)][0]);
    
    // create top row
    let emoji = "";
    emoji = client.emojis.cache.find(el => el.name == "Team");
    if(emoji) emoji = `<:${emoji.name}:${emoji.id}>`;
    else emoji = "🔵";
    topRow += emoji;
    emoji = client.emojis.cache.find(el => el.name == "Version");
    if(emoji) emoji = `<:${emoji.name}:${emoji.id}>`;
    else emoji = "🇻";
    topRow += emoji;
    emoji = client.emojis.cache.find(el => el.name == "Category");
    if(emoji) emoji = `<:${emoji.name}:${emoji.id}>`;
    else emoji = "🔵";
    topRow += emoji;
    emoji = client.emojis.cache.find(el => el.name == "Status");
    if(emoji) emoji = `<:${emoji.name}:${emoji.id}>`;
    else emoji = "✨";
    topRow += emoji;
    emoji = client.emojis.cache.find(el => el.name == "Alphabet");
    if(emoji) emoji = `<:${emoji.name}:${emoji.id}>`;
    else emoji = "🔤";
    topRow += emoji;
});

const roleData = [["Town Elder","Townsfolk","old-2","Miscellaneous","Deleted"],["Priestess","Townsfolk","old-2","Power","Deleted"],["Jack Robinson","Townsfolk","old-2","Miscellaneous","Deleted"],["Robin Jackson","Townsfolk","old-2","Miscellaneous","Deleted"],["Acrobat","Townsfolk","v9","Miscellaneous","Deleted"],["Tasty Villager","Townsfolk","v12","Miscellaneous","Deleted"],["Claimspace","Townsfolk","v9","Miscellaneous","Deleted"],["Idiot","Townsfolk","old-2","Miscellaneous","Default"],["Executioner","Townsfolk","old-2","Killing","Default"],["Barber","Townsfolk","old-2","Killing","Default"],["Fortune Apprentice","Townsfolk","old-2","Miscellaneous","Default"],["Macho","Townsfolk","old-2","Miscellaneous","Default"],["Town Crier","Townsfolk","v1","Miscellaneous","Default"],["Stalker","Townsfolk","old-2","Power","Default"],["Innkeeper","Townsfolk","v0","Investigative","Default"],["Mad Scientist","Townsfolk","old-2","Killing","Default"],["Fortune Teller","Townsfolk","old-1","Investigative","Default"],["Hooker","Townsfolk","old-2","Power","Default"],["Fletcher","Townsfolk","v9","Power","Default"],["Amnesiac","Townsfolk","v13","Miscellaneous","Default"],["Oracle","Townsfolk","v9","Investigative","Default"],["Grandma","Townsfolk","old-2","Power","Default"],["Child","Townsfolk","v9","Miscellaneous","Default"],["Trickster","Townsfolk","v6","Miscellaneous","Default"],["Aura Teller","Townsfolk","old-2","Investigative","Default"],["Journalist","Townsfolk","v7","Miscellaneous","Default"],["Baker","Townsfolk","old-1","Group","Default"],["Assistant","Townsfolk","v12","Miscellaneous","Default"],["Butcher","Townsfolk","old-2","Group","Default"],["Witch","Townsfolk","old-2","Killing","Default"],["Devout Villager","Townsfolk","v14","Miscellaneous","Default"],["Exorcist","Townsfolk","old-2","Power","Default"],["Bartender","Townsfolk","v8","Miscellaneous","Default"],["Cult Leader","Townsfolk","old-1","Killing","Default"],["Cult Member","Townsfolk","old-1","Group","Default"],["Bard","Townsfolk","v9","Miscellaneous","Default"],["Crowd Seeker","Townsfolk","old-1","Investigative","Default"],["Herald","Townsfolk","v13","Power","Default"],["Alcoholic","Townsfolk","v15","Miscellaneous","Limited"],["Juror","Townsfolk","v12","Group","Limited"],["Royal Knight","Townsfolk","old-2","Power","Default"],["Ranger","Townsfolk","v9","Miscellaneous","Default"],["Priest","Townsfolk","old-2","Killing","Default"],["Huntsman","Townsfolk","v1","Investigative","Default"],["Huntress","Townsfolk","old-1","Killing","Default"],["Medium","Townsfolk","v7","Power","Default"],["Cursed Civilian","Townsfolk","old-1","Miscellaneous","Default"],["Runner","Townsfolk","old-1","Miscellaneous","Default"],["Assassin","Townsfolk","old-2","Killing","Default"],["Coroner","Townsfolk","v4","Investigative","Default"],["Citizen","Townsfolk","old-1","Miscellaneous","Default"],["Amulet Holder","Townsfolk","v15","Killing","Limited"],["Sacred Wolf","Werewolf","old-2","Miscellaneous","Deleted"],["Curse Caster","Werewolf","old-2","Power","Deleted"],["Packless Wolf","Werewolf","v7","Miscellaneous","Deleted"],["Infecting Wolf","Werewolf","old-2","Power","Default"],["Archivist Fox","Werewolf","v14","Investigative","Limited"],["Tanner","Werewolf","old-2","Power","Default"],["Corrupt Wolf","Werewolf","v14","Power","Limited"],["Bloody Butcher","Werewolf","old-2","Group","Default"],["Trickster Wolf","Werewolf","v13","Transformation","Default"],["Lone Warlock","Werewolf","v4","Investigative","Default"],["Disguised Fox","Werewolf","v9","Power","Default"],["Alpha Wolf","Werewolf","v7","Killing","Default"],["Scared Wolf","Werewolf","v0","Miscellaneous","Default"],["Psychic Wolf","Werewolf","v1","Investigative","Default"],["Hellhound","Werewolf","old-2","Group","Default"],["Knowledgable Wolf","Werewolf","v9","Miscellaneous","Default"],["Clairvoyant Fox","Werewolf","v11","Investigative","Default"],["Wolf","Werewolf","old-1","Miscellaneous","Default"],["Pack Tanner","Werewolf","v11","Power","Limited"],["Tracking Wolf","Werewolf","v14","Investigative","Limited"],["Warlock","Werewolf","old-1","Investigative","Default"],["Sneaking Wolf","Werewolf","v9","Miscellaneous","Default"],["Direwolf","Werewolf","v13","Killing","Default"],["Saboteur Wolf","Werewolf","v8","Power","Default"],["Wolf Cub","Werewolf","old-2","Miscellaneous","Default"],["Lone Wolf","Werewolf","old-2","Killing","Default"],["Recluse","Werewolf","v15","Miscellaneous","Limited"],["The Thing","Solo","old-2","Miscellaneous","Deleted"],["Four Horsemen","Solo","old-2","Killing","Deleted"],["Immortal","Solo","old-2","Miscellaneous","Deleted"],["Archangel","Solo","v6","Killing","Deleted"],["Saint","Solo","v6","Miscellaneous","Deleted"],["Ice Queen","Solo","v9","Power","Deleted"],["Ice King","Solo","v8","Power","Deleted"],["Imp","Solo","old-2","Miscellaneous","Default"],["Gray Werewolf","Solo","v9","Killing","Deleted"],["Shepherd","Solo","v11","Power","Limited"],["Wraith","Solo","v12","Killing","Limited"],["Reaper","Solo","v9","Killing","Limited"],["Undead","Solo","old-2","Miscellaneous","Default"],["Herding Dog","Solo","v11","Power","Limited"],["Scared White Werewolf","Solo","v14","Killing","Deleted"],["Cryptographer","Solo","v14","Killing","Deleted"],["Plague Bearer","Solo","v9","Killing","Default"],["Plague Carrier","Solo","v11","Miscellaneous","Default"],["Wisp","Solo","v11","Killing","Default"],["Pyromancer","Solo","v0","Killing","Default"],["Flute Apprentice","Solo","v9","Power","Default"],["Flute Player","Solo","old-1","Power","Default"],["Zombie","Solo","v14","Recruitment","Limited"],["Bat","Solo","v14","Recruitment","Limited"],["Corpse","Solo","v14","Miscellaneous","Limited"],["Vampire","Solo","old-2","Recruitment","Default"],["White Werewolf","Solo","old-1","Killing","Default"],["Horseman","Solo","v15","Power","Limited"],["Horseman of Death","Solo","v15","Killing","Limited"],["Horseman of Pestilence","Solo","v15","Power","Limited"],["Horseman of Famine","Solo","v15","Power","Limited"],["Demon","Solo","v11","Killing","Default"],["Devil","Solo","old-2","Killing","Default"],["Cerebus","Solo","v15","Power","Limited"],["Firebug","Solo","v15","Killing","Limited"],["Flute Charmer","Solo","v15","Power","Limited"],["Apocalyptic Horseman","Solo","v15","Killing","Limited"],["Horseman of War","Solo","v15","Power","Limited"],["Spirit","Solo","v14","Miscellaneous","Limited"],["Survivor","Unaligned","v1","Miscellaneous","Deleted"],["Burglar","Unaligned","v13","Miscellaneous","Deleted"],["Apprentice","Unaligned","v9","Align","Limited"],["Prophetic Hag","Unaligned","v13","Align","Limited"],["Cautious Hag","Unaligned","v13","Align","Limited"],["Thief","Unaligned","v13","Align","Limited"],["Unemployed Chef","Unaligned","v14","Align","Limited"],["Despot","Unaligned","old-2","Miscellaneous","Default"],["Angel","Unaligned","old-2","Miscellaneous","Default"],["Riding Hood","Unaligned","v10","Miscellaneous","Default"],["Plague Doctor","Unaligned","v13","Miscellaneous","Default"],["Look-Alike","Unaligned","old-2","Align","Default"],["Vicious Hag","Unaligned","v13","Align","Limited"],["Hag","Unaligned","v13","Align","Limited"],["Psychopath","Unaligned","old-2","Miscellaneous","Default"],["Cupid","Unaligned","old-1","Align","Default"],["Dog","Unaligned","old-2","Align","Default"],["Cat","Unaligned","v13","Align","Default"],["Chef","Unaligned","v7","Align","Default"],["Golem","Unaligned","v14","Miscellaneous","Limited"],["Detective","Unaligned","v15","Miscellaneous","Limited"],["Apocalyptic Cupid","Unaligned","v15","Align","Limited"],["Cupid Hag","Unaligned","v14","Align","Limited"],["Cupid Wolf","Unaligned","v12","Align","Default"],["Demonic Cupid","Unaligned","v12","Align","Default"],["Flaming Cupid","Unaligned","v12","Align","Default"],["Lupine Cupid","Unaligned","v12","Align","Default"],["Plagued Cupid","Unaligned","v14","Align","Default"],["Spectral Cupid","Unaligned","v14","Align","Limited"],["Undead Cupid","Unaligned","v12","Align","Default"],["Zombified Cupid","Unaligned","v14","Align","Limited"],["Immune Survivor","Unaligned","v9","Miscellaneous","Deleted"]];
const maxGuesses = 5;
const versionOrder = ["old-1","old-2","v0","v1","v2","v3","v4","v5","v6","v7","v8","v9","v10","v11","v12","v13","v14","v15"];
const categoryOrder = [["Transformation",6],["Align",6],["Killing",5],["Recruitment",5],["Group",4],["Investigative",3],["Power",2],["Miscellaneous",1]];

var previousGuesses = {};
var fourCorrect = [];
var guessDone = [];

var answerData = [];
function updateAnswer(roleName) {
    let newAnswer = roleData.filter(el => el[0] == roleName)[0];
    if(newAnswer) {
        answerData = newAnswer;
        previousGuesses = {};
        fourCorrect = [];
        guessDone = [];
        console.log("!! NEW ANSWER !!", answerData);
        return true;
    }
    return false;
}

function isGameMaster(member) {
    if(!member) return false;
    return member && member.roles && member.roles.cache.get("584767449078169601");
}

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
        case "help":
            // Send pinging message
            interaction.reply({ content: "Guess a role with /guess, you get __5__ guesses. Afterwards, show your result with /result. Roles are categorized by 4 attributes: team (town, wolf, solo, ua), version added in (see a list in /list), category (Transformation & Align > Killing & Recruitment > Group > Investigative > Power > Miscellaneous) and status (default, limited, deleted). If you get the first four columns right, but the role isn't right, an additional column for the first letter of the role name is added." })
        break;
        case "list":
            interaction.reply({ content: "old-1: Fortune Teller, Baker, Cult Leader, Cult Member, Crowd Seeker, Huntress, Cursed Civilian, Runner, Citizen, Wolf, Warlock, Flute Player, White Werewolf, Cupid\nold-2: Town Elder, Priestess, Jack Robinson, Robin Jackson, Idiot, Executioner, Barber, Fortune Apprentice, Macho, Stalker, Mad Scientist, Hooker, Grandma, Aura Teller, Butcher, Witch, Exorcist, Royal Knight, Priest, Assassin, Blessed Wolf, Curse Caster, Infecting Wolf, Tanner, Bloody Butcher, Hellhound, Wolf Cub, Lone Wolf, The Thing, Four Horsemen, Immortal, Imp, Undead, Vampire, Devil, Despot, Angel, Look-Alike, Psychopath, Dog\nv0: Innkeeper, Scared Wolf, Pyromancer\nv1: Town Crier, Huntsman, Psychic Wolf, Survivor\nv4: Coroner, Lone Warlock\nv6: Trickster, Archangel, Saint\nv7: Journalist, Medium, Packless Wolf, Alpha Wolf, Chef\nv8: Bartender, Saboteur Wolf, Ice King\nv9: Acrobat, Claimspace, Fletcher, Oracle, Child, Bard, Ranger, Disguised Fox, Knowledgable Wolf, Sneaking Wolf, Ice Queen, Gray Werewolf, Reaper, Plague Bearer, Flute Apprentice, Apprentice, Immune Survivor\nv10: Riding Hood\nv11: Clairvoyant Fox, Pack Tanner, Shepherd, Herding Dog, Plague Carrier, Wisp, Demon\nv12: Tasty Villager, Assistant, Juror, Wraith, Cupid Wolf, Demonic Cupid, Flaming Cupid, Lupine Cupid, Undead Cupid\nv13: Amnesiac, Herald, Trickster Wolf, Direwolf, Burglar, Prophetic Hag, Cautious Hag, Thief, Plague Doctor, Vicious Hag, Hag, Cat\nv14: Devout Villager, Archivist Fox, Corrupt Wolf, Tracking Wolf, Scared White Werewolf, Cryptographer, Zombie, Bat, Corpse, Spirit, Unemployed Chef, Golem, Cupid Hag, Plagued Cupid, Spectral Cupid, Zombified Cupid\nv15: Alcoholic, Amulet Holder, Recluse, Horseman, Horseman of Death, Horseman of Pestilence, Horseman of Famine, Cerebus, Firebug, Flute Charmer, Apocalyptic Horseman, Horseman of War, Detective, Apocalyptic Cupid", ephemeral: true })
        break;
        case "result":
             if(guessDone.indexOf(interaction.member.id) >= 0) {
                interaction.reply({ content: topRow + "\n" + previousGuesses[interaction.member.id].join("\n"), fetchReply: true });
            } else {
                interaction.reply({ content:"You are not done guessing!\n" + (previousGuesses[interaction.member.id] ? topRow + "\n" + previousGuesses[interaction.member.id].join("\n") : ""), fetchReply: true, ephemeral: true });
            }
        break;
        case "change":
            if(!isGameMaster(interaction.member)) {
                return;
            }
            let newAnswer = interaction.options.get('role').value;
            
            if(newAnswer == "random") {
                newAnswer = roleData[Math.floor(Math.random() * roleData.length)][0];
                let respo = updateAnswer(newAnswer);
                // Send pinging message
                if(respo) interaction.reply({ content: "❓ New Answer: *Random*" })
                else interaction.reply({ content: "⛔ Could not find role.", ephemeral: true })
            } else { 
                let respo = updateAnswer(newAnswer);
                // Send pinging message
                if(respo) interaction.reply({ content: "✅ New Answer: `" + newAnswer + "`", ephemeral: true })
                else interaction.reply({ content: "⛔ Could not find role.", ephemeral: true })
            }
            
        break;
        case "guess":
            if(guessDone.indexOf(interaction.member.id) >= 0) {
                interaction.reply({ content:"You have hit the maximum amount of guesses!\n" + topRow + "\n" + previousGuesses[interaction.member.id].join("\n"), fetchReply: true, ephemeral: true });
                return;
            }
        
            let roleName = interaction.options.get('role').value.replace(/[^a-zA-Z]*/g,"");
            let allRoleNames = roleData.map(el => el[0].toLowerCase());
			let bestMatch = findBestMatch(roleName.toLowerCase(), allRoleNames.map(el => el.toLowerCase())); // find closest match
            if(bestMatch.value <= ~~(roleName.length/2)) {
                let emoji = client.emojis.cache.find(el => el.name.toLowerCase() === bestMatch.name.replace(/[^a-z]/g,""));
                if(emoji) emoji = `<:${emoji.name}:${emoji.id}> `;
                else emoji = "";
                
                let guessedRoleData = roleData.filter(el => el[0].toLowerCase() == bestMatch.name)[0];
                console.log(previousGuesses[interaction.member.id] ? previousGuesses[interaction.member.id].length + 1 : 1, interaction.member.user.username, guessedRoleData);
                
                let wwrCounter = 0;
                
                let wwrdle1 = ""
                if(guessedRoleData[1] == answerData[1]) {
                    wwrdle1 = "🟩";
                    wwrCounter++;
                } else {
                    wwrdle1 = "🟥";
                }
                let wwrdle2 = "";
                if(guessedRoleData[2] == answerData[2]) {
                    wwrdle2 = "🟩";
                    wwrCounter++;
                } else {
                    let guessIndex = versionOrder.indexOf(guessedRoleData[2]);
                    let answerIndex = versionOrder.indexOf(answerData[2]);
                    if(answerIndex > guessIndex) wwrdle2 = "🔼";
                    else wwrdle2 = "🔽";
                }
                let wwrdle3 = "";
                if(guessedRoleData[3] == answerData[3]) {
                    wwrdle3 = "🟩";
                    wwrCounter++;
                } else {
                    let guessIndex = categoryOrder.filter(el => el[0] == guessedRoleData[3])[0][1];
                    let answerIndex = categoryOrder.filter(el => el[0] == answerData[3])[0][1];
                    if(answerIndex > guessIndex) wwrdle3 = "🔼";
                    else if(answerIndex < guessIndex) wwrdle3 = "🔽";
                    else wwrdle3 = "🟨";
                }
                let wwrdle4 = ""
                if(guessedRoleData[4] == answerData[4]) {
                    wwrdle4 = "🟩";
                    wwrCounter++;
                } else {
                    wwrdle4 = "🟥";
                }
                
                let wwrdle5 = "⬛";
                
                if(wwrCounter == 4) {
                    fourCorrect.push(interaction.member.id);
                }
                
                if(fourCorrect.indexOf(interaction.member.id) >= 0) {
                    let charGuess = guessedRoleData[0][0].toLowerCase();
                    let answerGuess = answerData[0][0].toLowerCase();
                    if(answerGuess > charGuess) wwrdle5 = "🔼";
                    else if(answerGuess < charGuess) wwrdle5 = "🔽";
                    else wwrdle5 = "🟩";     
                } 
                
                
                let response = `${wwrdle1}${wwrdle2}${wwrdle3}${wwrdle4}${wwrdle5}`;
                
                if(previousGuesses[interaction.member.id]) {
                    previousGuesses[interaction.member.id].push(response);
                } else {
                    previousGuesses[interaction.member.id] = [response];
                }
                
                let finalLine = "";
                
                if(guessedRoleData[0] == answerData[0]) {
                    finalLine = "\n✅ Correct in `" + previousGuesses[interaction.member.id].length + "` guesses! Share your result with `/result`!"
                    guessDone.push(interaction.member.id);
                    console.log(interaction.member.user.username, "Correct in ", previousGuesses[interaction.member.id].length);
                } else if(previousGuesses[interaction.member.id].length == maxGuesses) {
                    finalLine = "\n⛔ Failed to guess the role. Share your result with `/result`!";
                    guessDone.push(interaction.member.id);
                    console.log(interaction.member.user.username, "Fail");
                }
                
                interaction.reply({ content: emoji + "Guessing role `" + bestMatch.name + "`!\n" + topRow + "\n" + previousGuesses[interaction.member.id].join("\n") + finalLine, fetchReply: true, ephemeral: true })
            } else {
                interaction.reply({ content: "Could not find role `" + roleName + "`.", fetchReply: true, ephemeral: true })
            }
        break;
    }
})

/* Register Slash Commands */
function registerCommands() {
    /**client.application?.commands.create({
        name: 'ping',
        description: 'Gives the ping of the bot, and checks if the bot is running.'
    });**/
    client.application?.commands.create({
        name: 'help',
        description: 'Explains WWRdle.'
    });
    client.application?.commands.create({
        name: 'result',
        description: 'Shows your result.'
    });
    client.application?.commands.create({
        name: 'list',
        description: 'List what version roles were added in.'
    });
    client.application?.commands.create({
        name: 'guess',
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
    client.application?.commands.create({
        name: 'change',
        description: 'Not available.',
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
// returns a value for how many edits (additions, removals, replacements) are necessary to turn one string into another
// this means it basically gives a score on how close two strings are, with closer values being better
// known as "levenshtein distance"
function strDst(str1 = "", str2 = "") {
    // create empty matrix, with row 1 and column 1 filled with incrementing numbers
    var len1 = str1.length, len2 = str2.length;
    var track = Array(len2 + 1).fill().map((_, ind1) => 
    Array(len1 + 1).fill().map((_, ind2) =>
        !ind1 ? ind2 : (!ind2 ? ind1 : null)
    )
    );
    // determine levenshtein distance
    for(let j = 1; j <= len2; j++) {
    for(let i = 1; i <= len1; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
        );
    }
    }
    return track[len2][len1];
};

// finds the best match for arg1 in the list arg2
function findBestMatch(name = "", list = []) {
    let w = list.map(p => strDst(p, name));
    // get index of closest match (lowest weight)
    let best = w.reduce((iMax, x, i, arr) => x < arr[iMax] ? i : iMax, 0);
    return {value: w[best], index: best, name: list[best]};
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

/* 
	LOGIN
*/
client.login(config.token);
