const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('tiktok').setDescription('returns bot ping!'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReplay: true
        });

        const newMessage = `https://vm.dstn.to/ZMNn6NnUQ/`
        await interaction.editReply({
            content: newMessage
        });  
    }
}