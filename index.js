//We Are Requireing .ENV File And The Token
require('dotenv').config();

const { TOKEN } = process.env;
const { PREFIX } = process.env
const { OWNER_ID } = process.env



//Installing And Requireing The Packages
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { ffmpeg } = require('ffmpeg')
const { Player } = require("discord-player")

const path = require('path')

 
//Coding And Requireing The Intents
const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [

  GatewayIntentBits.Guilds, 
  GatewayIntentBits.GuildBans, 
  GatewayIntentBits.GuildMembers, 
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.AutoModerationConfiguration,
  GatewayIntentBits.AutoModerationExecution,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildScheduledEvents,

],

partials : [
  Partials.Channel,
  Partials.GuildMember,
  Partials.GuildScheduledEvent,
  Partials.Message,
  Partials.Reaction,
  Partials.ThreadMember,
  Partials.User
],
  
});

//Doing (Coding) Slash Command Halder
client.commands = new Collection();
client.commandArray = [];
const functionFolders = fs.readdirSync(`./functions`);
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./functions/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client)

}
client.handleEvents();
client.handleCommands();


  


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085
//Prefix Command Handler
// module.exports = client;

// require("./etkinlikler/message.js")

// client.commands = new Collection();
// client.aliases = new Collection(); /// Athena Code İyi Kullanımlar Diler
// fs.readdir("./komutlar/", (err, files) => {
//   if (err) console.error(err);
//   console.log(`Dizy Has ${files.length} Commands!`);
//   files.forEach(f => {
//     let props = require(`./komutlar/${f}`);
//     console.log(`[COMMAND] Registered CMD : ${props.help.name} !`);
//     client.commands.set(props.help.name, props);
//     props.conf.aliases.forEach(alias => {
//       client.aliases.set(alias, props.help.name);
//     });
//   });
// });

// client.reload = command => {
//   return new Promise((resolve, reject) => {
//     try {
//       delete require.cache[require.resolve(`./komutlar/${command}`)];
//       let cmd = require(`./komutlar/${command}`);
//       client.commands.delete(command);
//       client.aliases.forEach((cmd, alias) => {
//         if (cmd === command) client.aliases.delete(alias);
//       });
//       client.commands.set(command, cmd);
//       cmd.conf.aliases.forEach(alias => {
//         client.aliases.set(alias, cmd.help.name);
//       });
//       resolve();
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// client.load = command => {
//   return new Promise((resolve, reject) => {
//     try {
//       let cmd = require(`./komutlar/${command}`);
//       client.commands.set(command, cmd);
//       cmd.conf.aliases.forEach(alias => {
//         client.aliases.set(alias, cmd.help.name);
//       });
//       resolve();
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// client.unload = command => {
//   return new Promise((resolve, reject) => {
//     try {
//       delete require.cache[require.resolve(`./komutlar/${command}`)];
//       let cmd = require(`./komutlar/${command}`);
//       client.commands.delete(command);
//       client.aliases.forEach((cmd, alias) => {
//         if (cmd === command) client.aliases.delete(alias);
//       });
//       resolve();
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

//Getting Online The Bot
client.login(TOKEN)




//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085

//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085

//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


//CANNOT COPY SHARE WITHOUT PERMISSIONS
//THIS BOT'S OWNER IS WET#1085


