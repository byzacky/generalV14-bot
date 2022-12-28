const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder , ButtonBuilder ,   } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban A Member')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(op => op.setName("target").setDescription("Select The User Will Be Banned").setRequired(true))
        .addStringOption(op => op.setName("reason").setDescription('Reason Why Will Banned')),
        async execute(interaction, client) {

            const user = interaction.options.getMember("target")
            let reason = interaction.options.getString("reason")
            
            const member = await interaction.guild.members.fetch(user.id).catch(console.error)

            await interaction.deferReply({
                fetchReply: true,
            });

            if(!reason) reason = 'No Reason'
            
            

            await user.ban(
                {
                    deleteMessageDays : 1,
                    reason : reason
                }
            ).catch(console.error)

            await interaction.followUp(`Banned : <@${user.id}>\nReason : ${reason}`)
        }
}