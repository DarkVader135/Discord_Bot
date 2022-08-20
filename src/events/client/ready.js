module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log(`Ready!!! ${client.user.tag} is ready and working also @Allard smells`);
    }
}