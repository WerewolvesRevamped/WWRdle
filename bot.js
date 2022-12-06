/* Discord */
const { Client, Intents, ApplicationCommandOptionType } = require('discord.js');
global.client = new Client({ intents: ['GUILDS', 'GUILD_WEBHOOKS', 'GUILD_VOICE_STATES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS'] });
config = require("./config.json");

/* Setup */
var topRow = "";
var extraTop = ""
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
    
    emoji = client.emojis.cache.find(el => el.name == "UnalignedPlaceholder");
    if(emoji) emoji = `<:${emoji.name}:${emoji.id}>`;
    else emoji = "❓";
    extraTop += emoji;
});

const roleData = [["Town Elder","Townsfolk","old-2","Miscellaneous","Deleted"],["Priestess","Townsfolk","old-2","Power","Deleted"],["Jack Robinson","Townsfolk","old-3","Miscellaneous","Deleted"],["Robin Jackson","Townsfolk","old-3","Miscellaneous","Deleted"],["Acrobat","Townsfolk","v9","Miscellaneous","Deleted"],["Tasty Villager","Townsfolk","v12","Miscellaneous","Deleted"],["Claimspace","Townsfolk","v9","Miscellaneous","Deleted"],["Idiot","Townsfolk","old-2","Miscellaneous","Default"],["Executioner","Townsfolk","old-2","Killing","Default"],["Barber","Townsfolk","old-2","Killing","Default"],["Fortune Apprentice","Townsfolk","old-2","Miscellaneous","Default"],["Macho","Townsfolk","old-2","Miscellaneous","Default"],["Town Crier","Townsfolk","v1","Miscellaneous","Default"],["Stalker","Townsfolk","old-2","Power","Default"],["Innkeeper","Townsfolk","v0","Investigative","Default"],["Mad Scientist","Townsfolk","old-2","Killing","Default"],["Fortune Teller","Townsfolk","old-1","Investigative","Default"],["Hooker","Townsfolk","old-2","Power","Default"],["Fletcher","Townsfolk","v9","Power","Default"],["Amnesiac","Townsfolk","v13","Miscellaneous","Default"],["Oracle","Townsfolk","v9","Investigative","Default"],["Grandma","Townsfolk","old-2","Power","Default"],["Child","Townsfolk","v9","Miscellaneous","Default"],["Trickster","Townsfolk","v6","Miscellaneous","Default"],["Aura Teller","Townsfolk","old-2","Investigative","Default"],["Journalist","Townsfolk","v7","Miscellaneous","Default"],["Baker","Townsfolk","old-1","Group","Default"],["Assistant","Townsfolk","v12","Miscellaneous","Default"],["Butcher","Townsfolk","old-2","Group","Default"],["Witch","Townsfolk","old-3","Killing","Default"],["Devout Villager","Townsfolk","v14","Miscellaneous","Default"],["Exorcist","Townsfolk","old-2","Power","Default"],["Bartender","Townsfolk","v8","Miscellaneous","Default"],["Cult Leader","Townsfolk","old-1","Killing","Default"],["Cult Member","Townsfolk","old-1","Group","Default"],["Bard","Townsfolk","v9","Miscellaneous","Default"],["Crowd Seeker","Townsfolk","old-1","Investigative","Default"],["Herald","Townsfolk","v13","Power","Default"],["Alcoholic","Townsfolk","v15","Miscellaneous","Limited"],["Juror","Townsfolk","v12","Group","Limited"],["Royal Knight","Townsfolk","old-2","Power","Default"],["Ranger","Townsfolk","v9","Miscellaneous","Default"],["Priest","Townsfolk","old-2","Killing","Default"],["Huntsman","Townsfolk","v1","Investigative","Default"],["Huntress","Townsfolk","old-1","Killing","Default"],["Medium","Townsfolk","v7","Power","Default"],["Cursed Civilian","Townsfolk","old-1","Miscellaneous","Default"],["Runner","Townsfolk","old-1","Miscellaneous","Default"],["Assassin","Townsfolk","old-2","Killing","Default"],["Coroner","Townsfolk","v4","Investigative","Default"],["Citizen","Townsfolk","old-1","Miscellaneous","Default"],["Amulet Holder","Townsfolk","v15","Killing","Limited"],["Sacred Wolf","Werewolf","old-2","Miscellaneous","Deleted"],["Curse Caster","Werewolf","old-2","Power","Deleted"],["Packless Wolf","Werewolf","v7","Miscellaneous","Deleted"],["Infecting Wolf","Werewolf","old-2","Power","Default"],["Archivist Fox","Werewolf","v14","Investigative","Limited"],["Tanner","Werewolf","old-2","Power","Default"],["Corrupt Wolf","Werewolf","v14","Power","Limited"],["Bloody Butcher","Werewolf","old-3","Group","Default"],["Trickster Wolf","Werewolf","v13","Transformation","Default"],["Lone Warlock","Werewolf","v4","Investigative","Default"],["Disguised Fox","Werewolf","v9","Power","Default"],["Alpha Wolf","Werewolf","v7","Killing","Default"],["Scared Wolf","Werewolf","v0","Miscellaneous","Default"],["Psychic Wolf","Werewolf","v1","Investigative","Default"],["Hellhound","Werewolf","old-3","Group","Default"],["Knowledgable Wolf","Werewolf","v9","Miscellaneous","Default"],["Clairvoyant Fox","Werewolf","v11","Investigative","Default"],["Wolf","Werewolf","old-1","Miscellaneous","Default"],["Pack Tanner","Werewolf","v11","Power","Limited"],["Tracking Wolf","Werewolf","v14","Investigative","Limited"],["Warlock","Werewolf","old-1","Investigative","Default"],["Sneaking Wolf","Werewolf","v9","Miscellaneous","Default"],["Direwolf","Werewolf","v13","Killing","Default"],["Saboteur Wolf","Werewolf","v8","Power","Default"],["Wolf Cub","Werewolf","old-3","Miscellaneous","Default"],["Lone Wolf","Werewolf","old-2","Killing","Default"],["Recluse","Werewolf","v15","Miscellaneous","Limited"],["The Thing","Solo","old-3","Miscellaneous","Deleted"],["Four Horsemen","Solo","old-3","Killing","Deleted"],["Immortal","Solo","old-3","Miscellaneous","Deleted"],["Archangel","Solo","v6","Killing","Deleted"],["Saint","Solo","v6","Miscellaneous","Deleted"],["Ice Queen","Solo","v9","Power","Deleted"],["Ice King","Solo","v8","Power","Deleted"],["Imp","Solo","old-3","Miscellaneous","Default"],["Gray Werewolf","Solo","v9","Killing","Deleted"],["Shepherd","Solo","v11","Power","Limited"],["Wraith","Solo","v12","Killing","Limited"],["Reaper","Solo","v9","Killing","Limited"],["Undead","Solo","old-3","Miscellaneous","Default"],["Herding Dog","Solo","v11","Power","Limited"],["Scared White Werewolf","Solo","v14","Killing","Deleted"],["Cryptographer","Solo","unadded","Killing","Deleted"],["Plague Bearer","Solo","v9","Killing","Default"],["Plague Carrier","Solo","v11","Miscellaneous","Default"],["Wisp","Solo","v11","Killing","Default"],["Pyromancer","Solo","v0","Killing","Default"],["Flute Apprentice","Solo","v9","Power","Default"],["Flute Player","Solo","old-1","Power","Default"],["Zombie","Solo","v14","Recruitment","Limited"],["Bat","Solo","v14","Recruitment","Limited"],["Corpse","Solo","v14","Miscellaneous","Limited"],["Vampire","Solo","old-3","Recruitment","Default"],["White Werewolf","Solo","old-1","Killing","Default"],["Horseman","Solo","v15","Power","Limited"],["Horseman of Death","Solo","v15","Killing","Limited"],["Horseman of Pestilence","Solo","v15","Power","Limited"],["Horseman of Famine","Solo","v15","Power","Limited"],["Demon","Solo","v11","Killing","Default"],["Devil","Solo","old-3","Killing","Default"],["Cerebus","Solo","v15","Power","Limited"],["Firebug","Solo","v15","Killing","Limited"],["Flute Charmer","Solo","v15","Power","Limited"],["Apocalyptic Horseman","Solo","v15","Killing","Limited"],["Horseman of War","Solo","v15","Power","Limited"],["Spirit","Solo","v14","Miscellaneous","Limited"],["Survivor","Unaligned","v1","Miscellaneous","Deleted"],["Burglar","Unaligned","unadded","Miscellaneous","Deleted"],["Apprentice","Unaligned","v9","Align","Limited"],["Prophetic Hag","Unaligned","v13","Align","Limited"],["Cautious Hag","Unaligned","v13","Align","Limited"],["Thief","Unaligned","v13","Align","Limited"],["Unemployed Chef","Unaligned","v14","Miscellaneous","Limited"],["Despot","Unaligned","v1","Miscellaneous","Default"],["Angel","Unaligned","v2","Miscellaneous","Default"],["Riding Hood","Unaligned","v10","Miscellaneous","Default"],["Plague Doctor","Unaligned","v13","Miscellaneous","Default"],["Look-Alike","Unaligned","old-2","Align","Default"],["Vicious Hag","Unaligned","v13","Align","Limited"],["Hag","Unaligned","v13","Align","Limited"],["Psychopath","Unaligned","v1","Miscellaneous","Default"],["Cupid","Unaligned","old-1","Align","Default"],["Dog","Unaligned","old-2","Align","Default"],["Cat","Unaligned","v13","Align","Default"],["Chef","Unaligned","v7","Align","Default"],["Golem","Unaligned","v14","Miscellaneous","Limited"],["Detective","Unaligned","v15","Miscellaneous","Limited"],["Apocalyptic Cupid","Unaligned","v15","Align","Limited"],["Cupid Hag","Solo","v14","Miscellaneous","Limited"],["Cupid Wolf","Unaligned","v12","Align","Default"],["Demonic Cupid","Unaligned","v12","Align","Default"],["Flaming Cupid","Unaligned","v12","Align","Default"],["Lupine Cupid","Unaligned","v12","Align","Default"],["Plagued Cupid","Unaligned","v14","Align","Default"],["Spectral Cupid","Unaligned","v14","Align","Limited"],["Undead Cupid","Unaligned","v12","Align","Default"],["Zombified Cupid","Unaligned","v14","Align","Limited"],["Immune Survivor","Unaligned","v9","Miscellaneous","Deleted"],["Mayor","Elected","old-1","Killing","Default"],["Reporter","Elected","old-1","Miscellaneous","Default"],["Guardian","Elected","old-2","Power","Default"],["Amulet Crafter","Townsfolk","old-3","Power","Deleted"],["Flute Novice","Solo","v9","Power","Deleted"],["Last Living Citizen","Elected","unadded","Killing","Deleted"],["Elected Bartender","Elected","unadded","Miscellaneous","Deleted"],["Alternative Corrupt Wolf","Werewolf","v12","Power","Deleted"],["Very Cursed Civilian","Townsfolk","v7","Miscellaneous","Deleted"],["Alternative Innkeeper","Townsfolk","v12","Power","Deleted"],["Solo Psychopath","Solo","old-3","Miscellaneous","Deleted"],["Solo Despot","Solo","old-3","Miscellaneous","Deleted"],["Alternative Plaguebearer","Solo","v6","Recruitment","Deleted"],["Alternative Zombie","Solo","v6","Miscellaneous","Deleted"],["Fortune Master","Townsfolk","unadded","Investigative","Deleted"],["Solo Angel","Solo","old-2","Miscellaneous","Deleted"],["Alternative Alcoholic","Townsfolk","old-2","Miscellaneous","Deleted"],["Alternative Ice King","Solo","old-3","Power","Deleted"],["Original Innkeeper","Townsfolk","old-3","Power","Deleted"],["Cupid Wraith","Unaligned","unadded","Align","Deleted"],["Pyronner","Solo","unadded","Killing","Deleted"],["Pyro Bard","Solo","unadded","Killing","Deleted"],["Runner Vampire","Solo","unadded","Recruitment","Deleted"],["Cupid's Lover","Unaligned","old-1","Extra","Default"],["Fletcher's Customer","Unaligned","v9","Extra","Default"],["Vigilante","Townsfolk","unadded","Killing","Deleted"],["Evil Scientist","Solo","v9","Killing","Deleted"],["Vampire Witch","Solo","unadded","Recruitment","Deleted"]];
const maxGuesses = 5;
const versionOrder = ["old-1","old-2","old-3","v0","v1","v2","v3","v4","v5","v6","v7","v8","v9","v10","v11","v12","v13","v14","v15","unadded"];
const categoryOrder = [["Transformation",6],["Align",6],["Killing",5],["Recruitment",5],["Group",4],["Extra",4],["Investigative",3],["Power",2],["Miscellaneous",1],["Elected",1]];

var previousGuesses = {};
var previousRoleGuesses = {};
var fourCorrect = [];
var guessDone = [];

var answerData = [];
function updateAnswer(roleName) {
    let newAnswer = roleData.filter(el => el[0] == roleName)[0];
    if(newAnswer) {
        answerData = newAnswer;
        previousGuesses = {};
        previousRoleGuesses = {};
        fourCorrect = [];
        guessDone = [];
        log("❗ NEW ANSWER:**", answerData[0], "**");
        return true;
    }
    return false;
}

function isGameMaster(member) {
    if(!member) return false;
    return member && member.roles && member.roles.cache.get("584767449078169601");
}

function log(txt1, txt2 = "", txt3 = "", txt4 = "", txt5 = "") {
    let txt = txt1 + " " + txt2 + " " + txt3 + " " + txt4 + " " + txt5;
    console.log(txt);
    let guild = client.guilds.cache.get("584765921332297775");
    let channel;
    if(guild) channel = guild.channels.cache.get("1047920491089895565")
    if(channel) channel.send(txt);
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
            interaction.reply({ content: "__**General**__\nGuess a role with `/guess`. You get five guesses, try to find the WWRdle. View your current guesses with `/view` and share your final result with `/result`.\nA list of all roles and their version/category/status can be found in `/list`.\n\n__**Columns**__\n**<:Team:1047282015596200006> Column #1: Team**\nPossible Options: Townsfolk, Werewolves, Solo, Unaligned, Elected\nPossible Results: 🟥 / 🟩\n\n**🇻 Column #2: Version**\nPossible Options: old-1, old-2, old-3, v0-v15 and unadded (from least to most recent)\nPossible Results:\n🟩 Correct\n🔼 WWRdle is more __recent__\n🔽 WWRdle is __older__\n\n**<:Category:1047282013020901527> Column #3: Category**\nPossible Options: Transformation/Align > Killing/Recruitment> Group/Extra > Investigative > Power > Miscellaneous/Elected (from most to least powerful)\nPossible Results:\n🟩 Correct\n🔼 WWRdle is more __powerful__ \n🔽 WWRdle role is __weaker__\n🟨 Correct strength, wrong category (e.g. Transformation & Align)\n\n**✨ Column #4: Status**\nPossible Options: Default, Limited, Deleted\nPossible Results: 🟥 / 🟩\n\n**🔤 Column #5: Alphabetical**\nOnly activates when first four columns are 🟩\nPossible Results:\n🔼 WWRdle starting letter is __further down__ the alphabet (higher value letter)\n🔽 WWRdle starting letter is __earlier__ in the alphabet (lower value letter)" })
        break;
        case "list":
            let arg1 = interaction.options.get('team')?.value ?? null;
            let arg2 = interaction.options.get('category')?.value ?? null;
            let arg3 = interaction.options.get('status')?.value ?? null;
            let arg4 = interaction.options.get('version')?.value ?? null;
            let args = [];
            if(arg1) args.push(arg1.toLowerCase());
            if(arg2) args.push(arg2.toLowerCase());
            if(arg3) args.push(arg3.toLowerCase());
            if(arg4) args.push(arg4.toLowerCase());
            let filteredRoles = [];
            let title = "";
            if(args.length != 0) {
                title = "__**Role Search** | *(" + args.join(", ") + ")*__";
                filteredRoles = roleData.filter(el => ((args.includes(el[1].toLowerCase())?1:0) + (args.includes(el[2].toLowerCase())?1:0) + (args.includes(el[3].toLowerCase())?1:0) + (args.includes(el[4].toLowerCase())?1:0)) == args.length);
                filteredRoles = filteredRoles.map(el => {
                    let status = "";
                    if(el[4] == "Limited") status = "*";
                    if(el[4] == "Deleted") status = "~~";
                    return [el[2], status + el[0] + " (" + (el[1]=="Unaligned"?"UA":el[1][0]) + el[3][0] + ")" + status];
                });
            } else {
                title = "__**Role List** | *Shortened Names*__";
                filteredRoles = roleData.map(el => {
                    let splitName = el[0].split(" ");
                    let nickname = "";
                    if(splitName.length > 1) nickname = splitName.map(el => el.substr(0, 3)).join("");
                    else nickname = el[0].substr(0, 8).trim();
                    return [el[2], nickname];
                });
            }
            filteredRoles.sort((a,b) => versionOrder.indexOf(a[0]) - versionOrder.indexOf(b[0]));
            let sortedRoles = [];
            filteredRoles.forEach(el => sortedRoles[el[0]] ? sortedRoles[el[0]].push(el[1]) : sortedRoles[el[0]] = [el[1]]);
            let listText = [];
            for(let v in sortedRoles) {
                listText.push("**" + v + ":** " + sortedRoles[v].join(", "));
            }
            interaction.reply({ content: title + "\n" + listText.join("\n"), ephemeral: true });
        break;
        case "result":
             if(guessDone.indexOf(interaction.member.id) >= 0) {
                interaction.reply({ content: topRow + "\n" + previousGuesses[interaction.member.id].join("\n"), fetchReply: true });
            } else {
                interaction.reply({ content:"You are not done guessing!\n" + (previousGuesses[interaction.member.id] ? topRow + "\n" + previousGuesses[interaction.member.id].join("\n") : ""), fetchReply: true, ephemeral: true });
            }
        break;
        case "view":
             interaction.reply({ content: extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), ephemeral: true });
        break;
        case "change":
            if(!isGameMaster(interaction.member)) {
                interaction.reply({ content: "⛔ Unavailable. GM only.", ephemeral: true});
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
                interaction.reply({ content:"You have hit the maximum amount of guesses!\n" + extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), fetchReply: true, ephemeral: true });
                return;
            }
        
            let roleName = interaction.options.get('role').value.replace(/[^a-zA-Z]*/g,"");
            let allRoleNames = roleData.map(el => el[0].toLowerCase());
			let bestMatch = findBestMatch(roleName.toLowerCase(), allRoleNames.map(el => el.toLowerCase())); // find closest match
            if(bestMatch.value <= ~~(roleName.length/2)) {
                let emoji = client.emojis.cache.find(el => el.name.toLowerCase() === bestMatch.name.replace(/[^a-z]/g,""));
                if(emoji) emoji = `<:${emoji.name}:${emoji.id}> `;
                else emoji = "❓ ";
                
                let guessedRoleData = roleData.filter(el => el[0].toLowerCase() == bestMatch.name)[0];
                log("▶️", "#" + (previousGuesses[interaction.member.id] ? previousGuesses[interaction.member.id].length + 1 : 1), interaction.member.user.username + ":", "**" + guessedRoleData[0] + "**");
                
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
                    else if(guessedRoleData[0] != answerData[0]) wwrdle5 = "🟨";     
                    else wwrdle5 = "🟩";     
                } 
                
                
                let response = `${wwrdle1}${wwrdle2}${wwrdle3}${wwrdle4}${wwrdle5}`;
                
                if(previousGuesses[interaction.member.id]) {
                    previousGuesses[interaction.member.id].push(response);
                    previousRoleGuesses[interaction.member.id].push(emoji + response);
                } else {
                    previousGuesses[interaction.member.id] = [response];
                    previousRoleGuesses[interaction.member.id] = [emoji + response];
                }
                
                let finalLine = "";
                
                if(guessedRoleData[0] == answerData[0]) {
                    finalLine = "\n✅ Correct in `" + previousGuesses[interaction.member.id].length + "` guesses! Share your result with `/result`!"
                    guessDone.push(interaction.member.id);
                    log("✅", interaction.member.user.username, "Correct in ", previousGuesses[interaction.member.id].length);
                } else if(previousGuesses[interaction.member.id].length == maxGuesses) {
                    finalLine = "\n⛔ Failed to guess the role. Share your result with `/result`!";
                    guessDone.push(interaction.member.id);
                    log("⛔", interaction.member.user.username, "Fail");
                }
                
                interaction.reply({ content: emoji + "Guessing role `" + bestMatch.name + "`!\n" + extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n") + finalLine, fetchReply: true, ephemeral: true })
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
        name: 'view',
        description: 'View your guesses.'
    });
    client.application?.commands.create({
        name: 'list',
        description: 'List all roles from a certain version, team, status or category.',
        options: [
            {
                type: "STRING",
                name: "team",
                description: "The name of a team.",
                required: false,
                choices: [{"name": "Townsfolk","value": "townsfolk"},{"name": "Werewolf","value": "werewolf"},{"name": "Solo","value": "solo"},{"name": "Unaligned","value": "unaligned"},{"name": "Elected","value": "elected"}]
            },
            {
                type: "STRING",
                name: "category",
                description: "The name of a category.",
                required: false,
                choices: [{"name": "Transformation","value": "Transformation"},{"name": "Align","value": "Align"},{"name": "Killing","value": "Killing"},{"name": "Recruitment","value": "Recruitment"},{"name": "Group","value": "Group"},{"name": "Extra","value": "Extra"},{"name": "Investigative","value": "Investigative"},{"name": "Power","value": "Power"},{"name": "Miscellaneous","value": "Miscellaneous"},{"name": "Elected","value": "Elected"}]
            },
            {
                type: "STRING",
                name: "status",
                description: "The name of a status.",
                required: false,
                choices: [{"name": "Default","value": "default"},{"name": "Limited","value": "limited"},{"name": "Deleted","value": "deleted"}]
            },
            {
                type: "STRING",
                name: "version",
                description: "The name of a version.",
                required: false,
                choices: [{"name": "old-1","value": "old-1"},{"name": "old-2","value": "old-2"},{"name": "old-3","value": "old-3"},{"name": "v0","value": "v0"},{"name": "v1","value": "v1"},{"name": "v2","value": "v2"},{"name": "v3","value": "v3"},{"name": "v4","value": "v4"},{"name": "v5","value": "v5"},{"name": "v6","value": "v6"},{"name": "v7","value": "v7"},{"name": "v8","value": "v8"},{"name": "v9","value": "v9"},{"name": "v10","value": "v10"},{"name": "v11","value": "v11"},{"name": "v12","value": "v12"},{"name": "v13","value": "v13"},{"name": "v14","value": "v14"},{"name": "v15","value": "v15"},{"name": "unadded","value": "unadded"}]
            }
        ]
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
