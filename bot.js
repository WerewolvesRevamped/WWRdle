/* Discord */
const { Client, Intents, ApplicationCommandOptionType, GatewayIntentBits } = require('discord.js');
global.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions] });
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
    
    setInterval(scheduledUpdateAnswer, 15 * 60 * 1000);
});

// Update WWRdle daily
var lastDate = new Date().getDate();
var scheduledHour = 5;
function scheduledUpdateAnswer() {
    console.log("Check Schedule");
    let d = new Date();
    let curHour = d.getHours();
    let curDate = d.getDate();
    if(curDate != lastDate && curHour == scheduledHour) {
        lastDate = curDate;
        newAnswer = roleData[Math.floor(Math.random() * roleData.length)][0];
        let respo = updateAnswer(newAnswer);
        let guild = client.guilds.cache.get("584765921332297775");
        if(guild) {
            //let channel = guild.channels.cache.get("1049465592534540428");
            let channel = guild.channels.cache.get("584860161395654667"); // debug: bot-spam
            if(channel) {
                let embed = { title: "WWRdle", description: `The WWRdle answer has been updated to a new random answer.`, color: 5490704 };
                channel.send({ embeds: [ embed ] });    
            }
        }
    }
}

const roleData = [["Town Elder","Townsfolk","old-2","Miscellaneous","Deleted"],["Priestess","Townsfolk","old-2","Power","Deleted"],["Jack Robinson","Townsfolk","old-3","Miscellaneous","Deleted"],["Robin Jackson","Townsfolk","old-3","Miscellaneous","Deleted"],["Acrobat","Townsfolk","v9","Miscellaneous","Deleted"],["Tasty Villager","Townsfolk","v12","Miscellaneous","Deleted"],["Claimspace","Townsfolk","v9","Miscellaneous","Deleted"],["Idiot","Townsfolk","old-2","Miscellaneous","Default"],["Executioner","Townsfolk","old-2","Killing","Default"],["Barber","Townsfolk","old-2","Killing","Default"],["Fortune Apprentice","Townsfolk","old-2","Miscellaneous","Default"],["Macho","Townsfolk","old-2","Miscellaneous","Default"],["Town Crier","Townsfolk","v0","Miscellaneous","Default"],["Stalker","Townsfolk","old-2","Investigative","Default"],["Innkeeper","Townsfolk","v0","Investigative","Default"],["Mad Scientist","Townsfolk","old-2","Killing","Default"],["Fortune Teller","Townsfolk","old-1","Investigative","Default"],["Hooker","Townsfolk","old-2","Power","Default"],["Fletcher","Townsfolk","v9","Killing","Default"],["Amnesiac","Townsfolk","v13","Miscellaneous","Default"],["Oracle","Townsfolk","v9","Investigative","Default"],["Grandma","Townsfolk","old-2","Power","Default"],["Child","Townsfolk","v9","Miscellaneous","Default"],["Trickster","Townsfolk","v6","Miscellaneous","Default"],["Aura Teller","Townsfolk","old-2","Investigative","Default"],["Journalist","Townsfolk","v7","Miscellaneous","Default"],["Baker","Townsfolk","old-1","Group","Default"],["Assistant","Townsfolk","v12","Miscellaneous","Default"],["Butcher","Townsfolk","old-2","Group","Default"],["Witch","Townsfolk","old-3","Killing","Default"],["Devout Villager","Townsfolk","v14","Miscellaneous","Default"],["Exorcist","Townsfolk","old-2","Power","Default"],["Bartender","Townsfolk","v8","Miscellaneous","Default"],["Cult Leader","Townsfolk","old-1","Killing","Default"],["Cult Member","Townsfolk","old-1","Group","Default"],["Bard","Townsfolk","v9","Miscellaneous","Deleted"],["Crowd Seeker","Townsfolk","old-1","Investigative","Default"],["Herald","Townsfolk","v13","Power","Default"],["Alcoholic","Townsfolk","v15","Miscellaneous","Default"],["Juror","Townsfolk","v12","Group","Limited"],["Royal Knight","Townsfolk","old-2","Power","Default"],["Ranger","Townsfolk","v9","Miscellaneous","Default"],["Priest","Townsfolk","old-2","Killing","Default"],["Huntsman","Townsfolk","v1","Investigative","Default"],["Huntress","Townsfolk","old-1","Killing","Default"],["Medium","Townsfolk","v7","Power","Default"],["Cursed Civilian","Townsfolk","old-1","Miscellaneous","Default"],["Runner","Townsfolk","old-1","Miscellaneous","Default"],["Assassin","Townsfolk","old-2","Killing","Default"],["Coroner","Townsfolk","v4","Miscellaneous","Default"],["Citizen","Townsfolk","old-1","Miscellaneous","Default"],["Amulet Crafter","Townsfolk","v15","Killing","Limited"],["Sacred Wolf","Werewolf","old-2","Miscellaneous","Deleted"],["Curse Caster","Werewolf","old-2","Power","Deleted"],["Packless Wolf","Werewolf","v7","Miscellaneous","Deleted"],["Infecting Wolf","Werewolf","old-2","Power","Default"],["Archivist Fox","Werewolf","v14","Investigative","Default"],["Tanner","Werewolf","old-2","Investigative","Default"],["Corrupt Wolf","Werewolf","v14","Power","Default"],["Bloody Butcher","Werewolf","old-3","Group","Default"],["Trickster Wolf","Werewolf","v13","Miscellaneous","Deleted"],["Lone Warlock","Werewolf","v4","Investigative","Default"],["Disguised Fox","Werewolf","v9","Power","Default"],["Alpha Wolf","Werewolf","v7","Killing","Default"],["Scared Wolf","Werewolf","v0","Miscellaneous","Default"],["Psychic Wolf","Werewolf","v1","Investigative","Default"],["Hellhound","Werewolf","old-3","Group","Deleted"],["Knowledgeable Wolf","Werewolf","v9","Miscellaneous","Default"],["Clairvoyant Fox","Werewolf","v11","Investigative","Default"],["Wolf","Werewolf","old-1","Miscellaneous","Default"],["Pack Tanner","Werewolf","v11","Power","Default"],["Tracking Wolf","Werewolf","v14","Investigative","Default"],["Warlock","Werewolf","old-1","Investigative","Default"],["Sneaking Wolf","Werewolf","v9","Miscellaneous","Default"],["Direwolf","Werewolf","v13","Killing","Default"],["Saboteur Wolf","Werewolf","v8","Power","Default"],["Wolf Cub","Werewolf","old-3","Miscellaneous","Default"],["Lone Wolf","Werewolf","old-2","Killing","Default"],["Recluse","Werewolf","v15","Miscellaneous","Default"],["Original The Thing","Solo","old-3","Miscellaneous","Deleted"],["Four Horsemen","Solo","old-3","Killing","Deleted"],["Immortal","Solo","old-3","Miscellaneous","Deleted"],["Archangel","Solo","v6","Killing","Deleted"],["Saint","Solo","v6","Miscellaneous","Deleted"],["Ice Queen","Solo","v9","Power","Deleted"],["Ice King","Solo","v8","Power","Deleted"],["Imp","Solo","old-3","Miscellaneous","Deleted"],["Gray Werewolf","Solo","v9","Killing","Deleted"],["Shepherd","Solo","v11","Power","Deleted"],["Wraith","Solo","v12","Killing","Limited"],["Reaper","Solo","v9","Killing","Limited"],["Undead","Solo","old-3","Miscellaneous","Default"],["Herding Dog","Solo","v11","Power","Deleted"],["Scared White Werewolf","Solo","v14","Killing","Deleted"],["Cryptographer","Solo","unadded","Killing","Deleted"],["Plague Bearer","Solo","v9","Killing","Default"],["Plague Carrier","Solo","v11","Miscellaneous","Default"],["Wisp","Solo","v11","Killing","Default"],["Pyromancer","Solo","v0","Killing","Default"],["Flute Apprentice","Solo","v9","Miscellaneous","Default"],["Flute Player","Solo","old-1","Power","Default"],["Zombie","Solo","v14","Power","Deleted"],["Bat","Solo","v14","Power","Deleted"],["Corpse","Solo","v14","Miscellaneous","Deleted"],["Vampire","Solo","old-3","Power","Default"],["White Werewolf","Solo","old-1","Killing","Default"],["Horseman","Solo","v15","Miscellaneous","Default"],["Horseman of Death","Solo","v15","Killing","Default"],["Horseman of Pestilence","Solo","v15","Power","Default"],["Horseman of Famine","Solo","v15","Power","Default"],["Demon","Solo","v11","Killing","Default"],["Devil","Solo","old-3","Killing","Default"],["Cerberus","Solo","v15","Power","Deleted"],["Firebug","Solo","v15","Killing","Limited"],["Flute Charmer","Solo","v15","Power","Limited"],["Apocalyptic Horseman","Solo","v15","Killing","Default"],["Horseman of War","Solo","v15","Power","Default"],["Spirit","Solo","v14","Miscellaneous","Deleted"],["Survivor","Unaligned","v1","Miscellaneous","Deleted"],["Burglar","Unaligned","unadded","Killing","Deleted"],["Apprentice","Unaligned","v9","Align","Deleted"],["Prophetic Hag","Unaligned","v13","Investigative","Limited"],["Cautious Hag","Unaligned","v13","Power","Limited"],["Thief","Unaligned","v13","Align","Deleted"],["Unemployed Chef","Unaligned","v14","Power","Deleted"],["Despot","Unaligned","v1","Miscellaneous","Default"],["Angel","Unaligned","v2","Killing","Default"],["Riding Hood","Unaligned","v10","Miscellaneous","Default"],["Plague Doctor","Unaligned","v13","Investigative","Default"],["Look-Alike","Unaligned","old-2","Align","Deleted"],["Vicious Hag","Unaligned","v13","Killing","Limited"],["Hag","Unaligned","v13","Align","Limited"],["Psychopath","Unaligned","v1","Investigative","Default"],["Cupid","Unaligned","old-1","Align","Default"],["Dog","Unaligned","old-2","Align","Default"],["Cat","Unaligned","v13","Align","Default"],["Chef","Unaligned","v7","Killing","Default"],["Golem","Unaligned","v14","Power","Deleted"],["Detective","Unaligned","v15","Investigative","Limited"],["Apocalyptic Cupid","Unaligned","v15","Align","Deleted"],["Cupid Hag","Solo","v14","Miscellaneous","Limited"],["Cupid Wolf","Unaligned","v12","Align","Default"],["Demonic Cupid","Solo","v12","Miscellaneous","Default"],["Flaming Cupid","Unaligned","v12","Align","Deleted"],["Lupine Cupid","Unaligned","v12","Align","Deleted"],["Plagued Cupid","Unaligned","v14","Align","Deleted"],["Spectral Cupid","Unaligned","v14","Align","Deleted"],["Undead Cupid","Unaligned","v12","Align","Default"],["Zombified Cupid","Unaligned","v14","Align","Deleted"],["Immune Survivor","Unaligned","v6","Miscellaneous","Deleted"],["Mayor","Extra","old-1","Elected","Default"],["Reporter","Extra","old-1","Elected","Default"],["Guardian","Extra","old-2","Elected","Default"],["Original Amulet Crafter","Townsfolk","old-3","Power","Deleted"],["Flute Novice","Solo","v9","Power","Deleted"],["Last Living Citizen","Solo","unadded","Elected","Deleted"],["Elected Bartender","Extra","unadded","Elected","Deleted"],["Royal Wolf","Werewolf","v12","Power","Deleted"],["Very Cursed Civilian","Townsfolk","v7","Miscellaneous","Deleted"],["Alternative Innkeeper","Townsfolk","v12","Power","Deleted"],["Solo Psychopath","Solo","old-3","Miscellaneous","Deleted"],["Solo Despot","Solo","old-3","Miscellaneous","Deleted"],["Alternative Plaguebearer","Solo","v6","Power","Deleted"],["Alternative Zombie","Solo","v6","Miscellaneous","Deleted"],["Fortune Master","Townsfolk","unadded","Investigative","Deleted"],["Solo Angel","Solo","old-2","Miscellaneous","Deleted"],["Alternative Alcoholic","Townsfolk","old-2","Miscellaneous","Deleted"],["Alternative Ice King","Solo","old-3","Power","Deleted"],["Original Innkeeper","Townsfolk","old-3","Power","Deleted"],["Cupid Wraith","Unaligned","unadded","Align","Deleted"],["Pyronner","Solo","unadded","Killing","Deleted"],["Pyro Bard","Solo","unadded","Killing","Deleted"],["Runner Vampire","Solo","unadded","Power","Deleted"],["Cupid's Lover","Extra","old-1","Miscellaneous","Default"],["Fletcher's Customer","Extra","v9","Miscellaneous","Default"],["Vigilante","Townsfolk","unadded","Killing","Deleted"],["Evil Scientist","Solo","v6","Killing","Deleted"],["Vampire Witch","Solo","unadded","Power","Deleted"],["Cult Acolyte","Townsfolk","v15","Group","Limited"],["Saintly Cupid","Solo","v12","Miscellaneous","Deleted"],["Alternative Zombified Cupid","Unaligned","v12","Align","Deleted"],["Swindler","Unaligned","v16","Power","Deleted"],["Ravenkeeper","Townsfolk","v16","Investigative","Limited"],["Rogue Wolf","Townsfolk","v16","Killing","Deleted"],["Spiritualist","Townsfolk","v16","Power","Deleted"],["Bear","Unaligned","v16","Killing","Deleted"],["None","Unaligned","mini-1","Miscellaneous","Deleted"],["Sorceress","Townsfolk","mini-1","Power","Deleted"],["Grayish Werewolf","Solo","mini-1","Killing","Deleted"],["Interrogator","Townsfolk","mini-1","Killing","Deleted"],["Lone Bloody Butcher","Werewolf","mini-2","Group","Deleted"],["Stalker Wolf","Werewolf","mini-1","Power","Deleted"],["Crow","Townsfolk","mini-1","Miscellaneous","Deleted"],["Savant","Townsfolk","mini-1","Miscellaneous","Deleted"],["Raven","Werewolf","mini-1","Miscellaneous","Deleted"],["Alternative Cupid","Unaligned","unadded","Align","Deleted"],["Alternative Dog","Unaligned","unadded","Align","Deleted"],["Alternative Look-Alike","Unaligned","unadded","Align","Deleted"],["Blessed Wolf","Werewolf","mini-2","Miscellaneous","Deleted"],["Ferocious Fox","Werewolf","mini-2","Killing","Deleted"],["Neighbor","Townsfolk","mini-2","Miscellaneous","Deleted"],["Bitter Hag","Solo","v13","Killing","Limited"],["Grandpa","Townsfolk","mini-1","Power","Deleted"],["Master Barber","Townsfolk","mini-3","Killing","Deleted"],["Royal Guard","Townsfolk","mini-3","Power","Deleted"],["Actor","Townsfolk","mini-3","Power","Deleted"],["Wild Child","Townsfolk","mini-3","Miscellaneous","Deleted"],["Ts","Admin","unadded","Killing","Default"],["Baroness","Werewolf","v16","Investigative","Limited"],["Rival","Unaligned","v16","Investigative","Limited"],["Greater Coyote","Werewolf","v16","Killing","Limited"],["Lesser Coyote","Werewolf","v16","Group","Limited"],["Gallant Fox","Werewolf","v16","Power","Limited"],["Loyal Cupid","Unaligned","v16","Align","Deleted"],["Test Subject","Extra","v16","Group","Default"],["Amulet of Protection","Extra","v16","Power","Limited"],["Apothecary","Townsfolk","v17","Killing","Limited"],["Journal Holder","Extra","v17","Miscellaneous","Default"],["Wager Recipient","Extra","v17","Power","Default"],["Offer Recipient","Extra","v17","Power","Deleted"],["Restaurant Customer","Extra","v17","Power","Default"],["Hunter","Townsfolk","mini-3","Killing","Deleted"],["Last Living Wolf","Solo","unadded","Killing","Deleted"],["Last Living Baby Wolf","Solo","unadded","Miscellaneous","Deleted"],["The Thing","Solo","unadded","Elected","Deleted"],["Cultist Wolf","Werewolf","v17","Group","Default"],["Howling Wolf","Werewolf","v17","Killing","Limited"],["Monarch","Extra","v17","Elected","Limited"],["Jay","Admin","unadded","Investigative","Default"],["Vera","Admin","unadded","Power","Default"],["Stalker Wolf","Werewolves","mini-1","Power","Deleted"],["Executioner Wolf","Werewolves","mini-1","Killing","Deleted"],["Fence","Townsfolk","mini-1","Miscellaneous","Deleted"]];
const maxGuesses = 5;
const versionOrder = ["unadded","old-1","old-2","old-3","v0","mini-1","v1","v2","v3","v4","v5","v6","v7","v8","v9","v10","v11","v12","mini-2","v13","v14","v15","v16","mini-3","v17"];
const categoryOrder = [["Elected",6],["Align",6],["Killing",5],["Group",4],["Investigative",3],["Power",2],["Miscellaneous",1]];

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
        log("? NEW ANSWER:**", answerData[0], "**");
        return true;
    }
    return false;
}

function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
    return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
}

function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

const psaExtraSeed = "PollutionWWR2";
function getPlayerSpecificAnswer(playerName) {
    console.log(playerName);
    // Create cyrb128 state:
    var seed = cyrb128(psaExtraSeed + playerName);
    // Four 32-bit component hashes provide the seed for sfc32.
    var rand = sfc32(seed[0], seed[1], seed[2], seed[3]);
    let r = rand();
    let r2 = Math.floor(r * roleData.length);
    //console.log(r);
    
    let newAnswer = roleData[r2];
    console.log("PSA", playerName, r2, newAnswer);
    return newAnswer;
}

function isGameMaster(member) {
    if(!member) return false;
    return member && member.roles && member.roles.cache.get("584767449078169601");
}

function log(txt1, txt2 = "", txt3 = "", txt4 = "", txt5 = "") {
    let txt = txt1 + " " + txt2 + " " + txt3 + " " + txt4 + " " + txt5;
    console.log(txt);
    /**let guild = client.guilds.cache.get("584765921332297775");
    let channel;
    if(guild) channel = guild.channels.cache.get("1047920491089895565")
    if(channel) channel.send(txt);**/
}

function getRandomRole() {
    return roleData[Math.floor(Math.random() * roleData.length)][0];
}


function getEmoji(name) {
    name = name.toLowerCase().replace(/[^a-z]/g,"");
    switch(name) {
        case "vera": name = "artist"; break;
        case "jay": name = "rolelistexpert"; break;
        case "restaurantcustomer": name = "chefmenu"; break;
        case "journalholder": return "📔"; break;
        case "monarch": return "👑"; break;
        case "spiritualist": return "👻"; break;
        case "wagerrecipient": name = "wager"; break;
        case "offerrecipient": name = "cerberusoffer"; break;
        case "cupidslover": name = "lover"; break;
        case "amuletofprotection": name = "amulet"; break;
        
        case "gallantfox": name = "fox"; break;
        case "loyalcupid": name = "cupidplaceholder"; break;
        case "rival": name = "unalignedplaceholder"; break;
        case "greatercoyote": name = "werewolfplaceholder"; break;
        case "lessercoyote": name = "werewolfplaceholder"; break;
        case "howlingwolf": name = "werewolfplaceholder"; break;
        case "lastlivingwolf": name = "werewolfplaceholder"; break;
        case "lastlivingbabywolf": name = "werewolfplaceholder"; break;
        case "roguewolf": name = "werewolfplaceholder"; break;
        case "originalthething": name = "thething"; break;
    }
    let emoji = client.emojis.cache.find(el => el.name.toLowerCase() === name);
    //console.log(name, emoji);
    if(emoji) emoji = `<:${emoji.name}:${emoji.id}> `;
    else emoji = "❓ ";
    return emoji;
}

/* New Slash Command */
client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return; // ignore non-slash commands
    switch(interaction.commandName) {
        case "ping":
            // Send pinging message
            interaction.reply({ content: "? Ping", fetchReply: true, ephemeral: true })
            .then(m => {
                // Get values
                let latency = m.createdTimestamp - interaction.createdTimestamp;
                let ping = Math.round(client.ws.ping);
                interaction.editReply("? Pong! Latency is " + latency + "ms. API Latency is " + ping + "ms");
            })
        break;
        case "help":
            // Send pinging message
            interaction.reply({ content: "__**General**__\nGuess a role with `/guess`. You get five guesses, try to find the WWRdle. View your current guesses with `/view` and share your final result with `/result`.\nA list of all roles and their version/category/status can be found in `/list`.\n\n__**Columns**__\n**<:Team:1047282015596200006> Column #1: Team**\nPossible Options: Townsfolk, Werewolves, Solo, Unaligned, Extra, Admin\nPossible Results: 🟥 / 🟩\n\n**🇻 Column #2: Version**\nPossible Options: unadded, old-1, old-2, old-3, v0, mini-1, v1-v12, mini-3, v13-v16 and mini-3 (from least to most recent)\nPossible Results:\n🟩 Correct\n🔼 WWRdle is more __recent__\n🔽 WWRdle is __older__\n\n**<:Category:1047282013020901527> Column #3: Category**\nPossible Options: Align/Elected > Killing> Group > Investigative > Power > Miscellaneous (from most to least powerful)\nPossible Results:\n🟩 Correct\n🔼 WWRdle is more __powerful__ \n🔽 WWRdle role is __weaker__\n🟨 Correct strength, wrong category (e.g. Align & Elected)\n\n**✨ Column #4: Status**\nPossible Options: Default, Limited, Deleted (Deleted includes Variant and MWR Roles)\nPossible Results: 🟥 / 🟩\n\n**🔤 Column #5: Alphabetical**\nOnly activates when first four columns are 🟩\nPossible Results:\n🔼 WWRdle starting letter is __further down__ the alphabet (higher value letter)\n🔽 WWRdle starting letter is __earlier__ in the alphabet (lower value letter)" });
        break;
        case "fmk":
             let fmk1 = getRandomRole();
             let fmk2 = getRandomRole();
             let fmk3 = getRandomRole();
             var fmkBlacklist = ["Child","Cult Acolyte","Wolf Cub","Assistant","Wild Child","Last Living Baby Wolf","Riding Hood"];
             while(fmkBlacklist.includes(fmk1)) { fmk1 = getRandomRole(); fmkBlacklist.push(fmk1); }
             while(fmkBlacklist.includes(fmk2)) { fmk2 = getRandomRole(); fmkBlacklist.push(fmk2); }
             while(fmkBlacklist.includes(fmk3)) fmk3 = getRandomRole();
             
             let fmk1e = getEmoji(fmk1);
             let fmk2e = getEmoji(fmk2);
             let fmk3e = getEmoji(fmk3);
             interaction.reply({ content: "FMK: " + fmk1e + " " + fmk1 + ", " + fmk2e + " " + fmk2 + ", " + fmk3e + " " + fmk3 });
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
            // retrieve relevant roles
            if(args.length != 0) {
                filteredRoles = roleData.filter(el => ((args.includes(el[1].toLowerCase())?1:0) + (args.includes(el[2].toLowerCase())?1:0) + (args.includes(el[3].toLowerCase())?1:0) + (args.includes(el[4].toLowerCase())?1:0)) == args.length);
                title = "__**Role Search** | " + filteredRoles.length + " | *(" + args.join(", ") + ")*__";
            } else {
                title = "__**Role List**__";
                filteredRoles = roleData;
            }
            // format role names
            filteredRoles = filteredRoles.map(el => {
                    let status = "";
                    if(el[4] == "Limited") status = "*";
                    if(el[4] == "Deleted") status = "~~";
                    return [el[2], status + el[0] + " (" + (el[1]=="Unaligned"?"UA":el[1][0]) + el[3][0] + ")" + status, getEmoji(el[0])];
                });
                
            // sort by version
            filteredRoles.sort((a,b) => versionOrder.indexOf(a[0]) - versionOrder.indexOf(b[0]));
            let sortedRoles = [];
            filteredRoles.forEach(el => sortedRoles[el[0]] ? sortedRoles[el[0]].push(el[1]) : sortedRoles[el[0]] = [el[1]]);
            
            // merge into a single message
            let versionLines = [];
            for(let v in sortedRoles) {
                if(sortedRoles[v].length < 20 && filteredRoles.length < 45) versionLines.push("**" + v + ":** " + sortedRoles[v].map(el => getEmoji(el.split(" (")[0]) + " " + el).join(", "));
                else versionLines.push("**" + v + ":** " + sortedRoles[v].join(", "));
            }
            // construct embed
            let embed = { "title": title, "fields": [ ] };
            let curContents = "";
            let counter = 1;
            for(let vl in versionLines) {
                if(curContents.length + versionLines[vl].length < 1000) {
                    curContents += "\n" + versionLines[vl];
                } else {
                    embed.fields.push({ "name": "Section #" + (counter++), "value": curContents, "inline": false });
                    curContents = versionLines[vl];
                }
            }
            embed.fields.push({ "name": "Section #" + counter, "value": curContents, "inline": false });
            interaction.reply({ embeds: [ embed ], ephemeral: true });
        break;
        case "result":
             if(guessDone.indexOf(interaction.member.id) >= 0) {
                interaction.reply({ content: topRow + "\n" + previousGuesses[interaction.member.id].join("\n"), fetchReply: true });
            } else {
                interaction.reply({ content:"You are not done guessing!\n" + (previousGuesses[interaction.member.id] ? topRow + "\n" + previousGuesses[interaction.member.id].join("\n") : ""), fetchReply: true, ephemeral: true });
            }
        break;
        case "view":
             if(previousRoleGuesses[interaction.member.id]) interaction.reply({ content: extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), ephemeral: true });
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
            if(false) {
                interaction.reply({ content:"This mode is currently unavailable.", fetchReply: true, ephemeral: true });
                return;
            }
        
        
            if(guessDone.indexOf(interaction.member.id) >= 0) {
                interaction.reply({ content:"You have hit the maximum amount of guesses!\n" + extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), fetchReply: true, ephemeral: true });
                return;
            }
        
            let roleName = interaction.options.get('role').value.replace(/[^a-zA-Z]*/g,"");
            let allRoleNames = roleData.map(el => el[0].toLowerCase());
			let bestMatch = findBestMatch(roleName.toLowerCase(), allRoleNames.map(el => el.toLowerCase())); // find closest match
            if(bestMatch.value <= ~~(roleName.length/2)) {
                emoji = getEmoji(bestMatch.name);
                
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
                    if(answerGuess > charGuess) wwrdle5 = "▶️";
                    else if(answerGuess < charGuess) wwrdle5 = "◀️";
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
                    if(interaction.guild.id === "584765921332297775") {
                        finalLine = "\n✅ Correct in `" + previousGuesses[interaction.member.id].length + "` guesses! Share your result with `/result`! As a reward you have earned `5` coins.";
                        let channel = interaction.guild.channels.cache.get("838768773094834216");
                        if(channel) channel.send(`$coins reward ${interaction.member.id} 5`);
                    } else {
                        finalLine = "\n✅ Correct in `" + previousGuesses[interaction.member.id].length + "` guesses! Share your result with `/result`!";
                    }
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
        case "guess_pollution":
            if(true) {
                interaction.reply({ content:"This mode is currently unavailable.", fetchReply: true, ephemeral: true });
                return;
            }
            
            if(guessDone.indexOf(interaction.member.id) >= 0) {
                interaction.reply({ content:"You have hit the maximum amount of guesses!\n" + extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), fetchReply: true, ephemeral: true });
                return;
            }
            
            let playerAnswer = getPlayerSpecificAnswer(interaction.user.username);
        
            let roleName2 = interaction.options.get('role').value.replace(/[^a-zA-Z]*/g,"");
            let allRoleNames2 = roleData.map(el => el[0].toLowerCase());
			let bestMatch2 = findBestMatch(roleName2.toLowerCase(), allRoleNames2.map(el => el.toLowerCase())); // find closest match
            if(bestMatch2.value <= ~~(roleName2.length/2)) {
                emoji = getEmoji(bestMatch2.name);
                
                let guessedRoleData = roleData.filter(el => el[0].toLowerCase() == bestMatch2.name)[0];
                log("▶️", "#" + (previousGuesses[interaction.member.id] ? previousGuesses[interaction.member.id].length + 1 : 1), interaction.member.user.username + ":", "**" + guessedRoleData[0] + "**");
                
                let wwrCounter = 0;
                
                let wwrdle1 = ""
                if(guessedRoleData[1] == playerAnswer[1]) {
                    wwrdle1 = "🟩";
                    wwrCounter++;
                } else {
                    wwrdle1 = "🟥";
                }
                let wwrdle2 = "";
                if(guessedRoleData[2] == playerAnswer[2]) {
                    wwrdle2 = "🟩";
                    wwrCounter++;
                } else {
                    let guessIndex = versionOrder.indexOf(guessedRoleData[2]);
                    let answerIndex = versionOrder.indexOf(playerAnswer[2]);
                    if(answerIndex > guessIndex) wwrdle2 = "🔼";
                    else wwrdle2 = "🔽";
                }
                let wwrdle3 = "";
                if(guessedRoleData[3] == playerAnswer[3]) {
                    wwrdle3 = "🟩";
                    wwrCounter++;
                } else {
                    let guessIndex = categoryOrder.filter(el => el[0] == guessedRoleData[3])[0][1];
                    let answerIndex = categoryOrder.filter(el => el[0] == playerAnswer[3])[0][1];
                    if(answerIndex > guessIndex) wwrdle3 = "🔼";
                    else if(answerIndex < guessIndex) wwrdle3 = "🔽";
                    else wwrdle3 = "🟨";
                }
                let wwrdle4 = ""
                if(guessedRoleData[4] == playerAnswer[4]) {
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
                    let answerGuess = playerAnswer[0][0].toLowerCase();
                    if(answerGuess > charGuess) wwrdle5 = "▶️";
                    else if(answerGuess < charGuess) wwrdle5 = "◀️";
                    else if(guessedRoleData[0] != playerAnswer[0]) wwrdle5 = "🟨";     
                    else wwrdle5 = "🟩";     
                } 
                
                let r1 = Math.random();
                let r2 = Math.random();
                let r3 = Math.random();
                let r4 = Math.random();
                let r5 = Math.random();
                
                if(r1 > 0.20 && r2 > 0.20 && r3 > 0.20 && r4 > 0.20) {
                    let wcase = Math.floor(Math.random() * 4);
                    switch(wcase) {
                        case 0: r1 = 0; break;
                        case 1: r2 = 0; break;
                        case 2: r3 = 0; break;
                        case 3: r4 = 0; break;
                    }
                }
                
                if(r1 <= 0.20 && r2 <= 0.20 && r3 <= 0.20 && r4 <= 0.20) {
                    let wcase = Math.floor(Math.random() * 4);
                    switch(wcase) {
                        case 0: r1 = 1; break;
                        case 1: r2 = 1; break;
                        case 2: r3 = 1; break;
                        case 3: r4 = 1; break;
                    }
                }
                
                if(guessedRoleData[0] != playerAnswer[0]) {
                    if(r1 > 0.20) wwrdle1 = "<:slimeball:1162861175231479890>";
                    if(r2 > 0.20) wwrdle2 = "<:slimeball:1162861175231479890>";
                    if(r3 > 0.20) wwrdle3 = "<:slimeball:1162861175231479890>";
                    if(r4 > 0.20) wwrdle4 = "<:slimeball:1162861175231479890>";
                    if(r5 > 0.20) wwrdle5 = "<:slimeball:1162861175231479890>";
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
                
                if(guessedRoleData[0] == playerAnswer[0]) {
                    finalLine = "\n✅ Correct in `" + previousGuesses[interaction.member.id].length + "` guesses! Share your result with `/result`, but be careful, it's got goo on it!"
                    guessDone.push(interaction.member.id);
                    log("✅", interaction.member.user.username, "Correct in ", previousGuesses[interaction.member.id].length);
                    interaction.reply({ content: emoji + "Guessing role `" + bestMatch2.name + "`!\n" + extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), fetchReply: true, ephemeral: true });
                    await sleep(1000);
                    interaction.followUp({ content: finalLine, fetchReply: true, ephemeral: true });
                } else if(previousGuesses[interaction.member.id].length == maxGuesses) {
                    finalLine = "\n⛔ Failed to guess the role. Share your result with `/result`!";
                    guessDone.push(interaction.member.id);
                    log("⛔", interaction.member.user.username, "Fail");
                    interaction.reply({ content: emoji + "Guessing role `" + bestMatch2.name + "`!\n" + extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), fetchReply: true, ephemeral: true });
                    await sleep(1000);
                    interaction.followUp({ content: finalLine, fetchReply: true, ephemeral: true });
                } else {
                    interaction.reply({ content: emoji + "Guessing role `" + bestMatch2.name + "`!\n" + extraTop + " " + topRow + "\n" + previousRoleGuesses[interaction.member.id].join("\n"), fetchReply: true, ephemeral: true });
                }
                
            } else {
                interaction.reply({ content: "Could not find role `" + roleName2 + "`.", fetchReply: true, ephemeral: true })
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
        name: 'fmk',
        description: 'fmk.'
    });
    client.application?.commands.create({
        name: 'list',
        description: 'List all roles from a certain version, team, status or category.',
        options: [
            {
                type: ApplicationCommandOptionType.String,
                name: "team",
                description: "The name of a team.",
                required: false,
                choices: [{"name": "Townsfolk","value": "townsfolk"},{"name": "Werewolf","value": "werewolf"},{"name": "Solo","value": "solo"},{"name": "Unaligned","value": "unaligned"},{"name": "Extra","value": "extra"},{"name": "Admin","value": "admin"}]
            },
            {
                type: ApplicationCommandOptionType.String,
                name: "category",
                description: "The name of a category.",
                required: false,
                choices: [{"name": "Elected","value": "Elected"},{"name": "Align","value": "Align"},{"name": "Killing","value": "Killing"},{"name": "Group","value": "Group"},{"name": "Investigative","value": "Investigative"},{"name": "Power","value": "Power"},{"name": "Miscellaneous","value": "Miscellaneous"}]
            },
            {
                type: ApplicationCommandOptionType.String,
                name: "status",
                description: "The name of a status.",
                required: false,
                choices: [{"name": "Default","value": "default"},{"name": "Limited","value": "limited"},{"name": "Deleted","value": "deleted"}]
            },
            {
                type: ApplicationCommandOptionType.String,
                name: "version",
                description: "The name of a version.",
                required: false,
                choices: [{"name": "unadded","value": "unadded"},{"name": "old-1","value": "old-1"},{"name": "old-2","value": "old-2"},{"name": "old-3","value": "old-3"},{"name": "v0","value": "v0"},{"name": "mini-1","value": "mini-1"},{"name": "v1","value": "v1"},{"name": "v2","value": "v2"},{"name": "v4","value": "v4"},{"name": "v6","value": "v6"},{"name": "v7","value": "v7"},{"name": "v8","value": "v8"},{"name": "v9","value": "v9"},{"name": "v10","value": "v10"},{"name": "v11","value": "v11"},{"name": "v12","value": "v12"},{"name": "mini-2","value": "mini-2"},{"name": "v13","value": "v13"},{"name": "v14","value": "v14"},{"name": "v15","value": "v15"},{"name": "v16","value": "v16"},{"name": "mini-3","value": "mini-3"},{"name": "v17","value": "v17"}]
            }
        ]
    });
    client.application?.commands.create({
        name: 'guess',
        description: 'Try to solve the WWRdle.',
        options: [
            {
                type: ApplicationCommandOptionType.String,
                name: "role",
                description: "The name of a role.",
                required: true
            }
        ]
    });
    client.application?.commands.create({
        name: 'guess_pollution',
        description: 'Try to solve the Pollution WWRdle.',
        options: [
            {
                type: ApplicationCommandOptionType.String,
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
                type: ApplicationCommandOptionType.String,
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
