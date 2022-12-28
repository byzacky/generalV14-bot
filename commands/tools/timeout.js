const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder , ButtonBuilder ,  PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Timeout A Mmeber')
        .addUserOption(op => op.setName("target").setDescription("Select The User Will Be Timeout").setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .addIntegerOption(op => op.setName('time').setDescription('the amount of timeout (i will timeout that for minut)').setRequired(true))
        .addStringOption(op => op.setName("reason").setDescription('Reason Why Will Timeout')),
        async execute(interaction, client) {

            const user = interaction.options.getMember("target")
            let reason = interaction.options.getString("reason")
            const time = interaction.options.getInteger("time")

            const member = await interaction.guild.members.fetch(user.id).catch(console.error)

            await interaction.deferReply({
                fetchReply: true,
            });

            if(!reason) reason = 'No Reason'
            
            await user.timeout(time * 60 * 1000)

            await interaction.followUp(`Timeoutted : <@${user.id}>\nReason : ${reason}`)
        }
}