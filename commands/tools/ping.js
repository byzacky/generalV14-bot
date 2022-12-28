const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Shows To My Ping'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });
 
        const newMessage = `**API Ping : ${client.ws.ping}\nMessage Ping: ${message.createdTimestamp - interaction.createdTimestamp}**`;
        await interaction.editReply({
            content: newMessage,
            ephemeral : true    
        });
    }
}