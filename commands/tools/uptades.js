const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptades')
        .setDescription('Shows My Latest Uptades'),
    async execute(interaction, client) {
        const embed = new Discord.EmbedBuilder()
    .setColor('#5865F2')
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`> **AdvancedBoat** V2.4 Uptade
    > 1) Bot has been uptade from V13 to V14.
    > 2) The old help menu was so bad,  removed the buttons and added the menu event instead and changed its appearance a bit.
    > 3) A new command called **dm** has added it wall send dm if you have manage messages permissions
    > 4) In the past, the bot only interacted when the channel or role was deleted, now it will interact when the channel or role is created.
    > 5) A new command called **timeout** and **untimeout** has added, the purpose of this command is to timeout and untimeout.
    > 6) Removed some unnecessary commands. I'll add it again if requested.
    > 7) **Ban protection** not working has been fixed.
    > 8) A new command called **kick protection** has arrived, it has a function like ban protection, it only works when it is kicked, not when it is banned.
    > 9) You can no longer use the bot without accepting its rules.
    > 10) If some commands of the bot are not visible to you (**DM, PROTECTION...**), it means that you do not have  permission on the server you are on.
    > 11) Removed  commands that not using, useless and unnecessary.
    > 12) If the bot is kicked or left from the server, all data belonging to the server will be deleted.
    > 13) Also, the bot's data has been reset.
`)
    .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
    .setTimestamp()

     interaction.reply({ embeds: [embed] });
    }
}