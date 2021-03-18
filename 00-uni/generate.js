const { PermissionOverwrites } = require('discord.js');
const data = require('./example.json');
module.exports = {
    commands: 'channel',
    minArgs: 0,
    requiredRoles: ['Moderator'],
    callback: (message, arguments) => {

        const { guild } = message
        data.forEach(function (profile, index, arr)
        {   

            guild.roles.create({
                data: {
                    name: `${profile.name}`,
                    color: 'YELLOW'
                },
            })
            .then((role) => {
                name = `${profile.name}`
                categoryId = `${profile.categoryId}`
                message.guild.channels
                .create(
                    name, {
                    type: 'text',
                })
                
                
                .then((channel) => {
                    channel.setParent("821906071227858965")
                    console.log(`The role color is: ${role.color}`)
                    channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
                    channel.updateOverwrite(role, { VIEW_CHANNEL: true });
                    
                })

            })
            //^role end
            .catch(console.error);


            

            
        });
    },  
}
  