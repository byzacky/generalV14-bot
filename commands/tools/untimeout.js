const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder , ButtonBuilder ,  PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('untimeout')
        .setDescription('Untimeout\'s A Mmeber')
        .addUserOption(op => op.setName("target").setDescription("Select The User Will Be Untimeout").setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers) 
        .addStringOption(op => op.setName("reason").setDescription('Reason Why Will UnTimeout')),
        async execute(interaction, client) {

            const user = interaction.options.getMember("target")
            let reason = interaction.options.getString("reason")

            const member = await interaction.guild.members.fetch(user.id).catch(console.error)

            await interaction.deferReply({
                fetchReply: true,
            });

            if(!reason) reason = 'No Reason'
            
            await user.timeout(null, reason)

            // const embed = new EmbedBuilder()
            // .setTitle(`Proccess Is Succesfulyy | 💪`)
            // .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            // .setDescription(`**Succesfully Untimeoutted <@${user.id}> Beacuse Of ${reason}**`)
            // .setColor(0x5fb041)
            // .setTimestamp()

            await interaction.followUp(
                {
                    content : `I Removed <@${user.id}>'s Timeout Succesfully Beacuse Of ${reason}`,
                    ephemerel : true
                }            
            )
        }
}