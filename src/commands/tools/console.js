const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('ping_shell').setDescription('sends a message in the shell'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReplay: true
        });

        console.log("message sent to console as requested from discord")
        
        const newMessage = `message sent to console as requested from discord`
        await interaction.editReply({
            content: newMessage
        });    
    }
}