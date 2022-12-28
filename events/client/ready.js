module.exports = {
    name : 'ready',
    once : true,
    async execute(client) {
        console.log(`[LOGIN] ${client.user.tag} Is Logged In And Online.`)
        const botname = client.user.username
       setInterval(() => {
            var aktivite = [
                `Working On forceban.js `,
                `${client.guilds.cache.size} Servers | /stat`,
                `advanced.gg | /help`,
                `discord.gg/wetrain`
            ];
            var rastgeleşeylerden = Math.floor(Math.random() * aktivite.length);
            client.user.setPresence({ activities: [{ name: aktivite[rastgeleşeylerden] }], status: 'online' });
            }, 1000); 
    
    }
}