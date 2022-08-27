module.exports = {
    name: 'messageCreate',
    async execute(message){
        //console.log(message.content);
        if(message.content.includes('vm.tiktok.com')){
            message.content = message.content.replace("https://vm.tiktok.com", "https://vm.dstn.to");
            message.content = "<@" + message.author.id + "> " + message.content;
            //console.log(message.content);
            message.reply(message.content);
            message.delete();
        } else if (message.content.includes("www.tiktok.com")){
            message.content = message.content.replace("https://www.tiktok.com", "https://vm.dstn.to");
            message.content = "<@" + message.author.id + "> " + message.content;
            //console.log(message.content);
            message.reply(message.content);
            message.delete();
        } else if (message.content.includes("https://twitter.com")){
            message.content = message.content.replace("https://twitter.com", "https://vxtwitter.com");
            message.content = "<@" + message.author.id + "> " + message.content;
            //console.log(message.content);
            message.reply(message.content);
            message.delete();
        }
    }
}
