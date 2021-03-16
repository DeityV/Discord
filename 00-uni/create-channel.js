const data = require('./utamae.json');
module.exports = {
    commands: 'utamae',
    minArgs: 0,
    expectedArgs: "",
    requiredRoles: ['Moderator'],
    callback: (message, arguments) => {

        const { guild } = message
        data.forEach(function (profile, index, arr)
        {   
            name = `${profile.name}`
            categoryId = `${profile.categoryId}`
            message.guild.channels
            .create(
                name, {
                type: 'text',
            })
            .then((channel) => {
                
                channel.setParent("821170794012344371")
            })
        });




    },  
}
  