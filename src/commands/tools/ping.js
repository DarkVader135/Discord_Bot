const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('returns bot ping!'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReplay: true
        });

        const newMessage = `API Latency: ${client.ws.ping}\n@Allard you smell`
        await interaction.editReply({
            content: newMessage
        });  
    }
}