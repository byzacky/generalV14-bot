const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder , ButtonBuilder ,  PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick A Member')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .addUserOption(op => op.setName("target").setDescription("Select The User Will Be Kicked").setRequired(true))
        .addStringOption(op => op.setName("reason").setDescription('Reason Why Will Kicked')),
        async execute(interaction, client) {

            const user = interaction.options.getMember("target")
            let reason = interaction.options.getString("reason")

            const member = await interaction.guild.members.fetch(user.id).catch(console.error)

            await interaction.deferReply({
                fetchReply: true,
            });

            if(!reason) reason = 'No Reason'
            
            await user.kick(reason).catch(console.error)

            await interaction.followUp(`Kicked : <@${user.id}>\nReason : ${reason}`)
        }
}