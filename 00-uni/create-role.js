const data = require('./utamae.json');
module.exports = {
    commands: 'createrole',
    minArgs: 0,
    expectedArgs: "",
    requiredRoles: ['Moderator'],
    callback: (message, arguments) => {
        
        
        
  
      
      const { guild } = message
      
      data.forEach(function (profile, index, arr)
      {   
          guild.roles.create({
            data: {
                name: `${profile.name}`,
                
            },
        })
        .then(console.log)
        .catch(console.error);

      });
    },  
}
  