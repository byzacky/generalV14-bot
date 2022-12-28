const { EmbedBuilder, ActionRowBuilder , ButtonBuilder ,  PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");




module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("me will shiw the user avatar.")
    .addUserOption(op => op.setName("user").setDescription("target avatar to get me.").setRequired(false)),
    async execute (interaction, client)  {
        const user = interaction.options.getMember("user") || interaction.user;
        const embed = new EmbedBuilder()
        .setColor('#5865F2')
        .setAuthor({ name: `${client.user.username} Avatar System`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setImage(user.displayAvatarURL({ dynmaic: true, size: 1024 }))   
        .setFooter({ text:  `${interaction.user.tag} Named Member Used.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
        .setTimestamp()
        interaction.reply({ embeds: [embed] })
          
     },
   };