const fs = require("fs");
const { REST, Routes } = require("discord.js");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync(`./commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`[COMMAND] Registered CMD : ${command.data.name}`);
      }

      CLIENT_ID = "1049718415406923846"; //The Bot's ID
      //GUILD_ID = "1035142922410151999"; it is a test

      const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
      try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands(CLIENT_ID), {
          body: client.commandArray,
        });

        console.log("Successfully reloaded application (/) commands.");
      } catch (error) {
        console.error(error);
      }
    }
  };
};
