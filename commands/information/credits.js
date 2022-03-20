const Command = require('../../structures/Command');
const Guild = require('../../database/schemas/Guild');
const { MessageEmbed } = require('discord.js');
module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'credits',
        aliases: ["credit"],
        description: 'Give\'s the proper reconigition to people who helped within this project.',
        category: 'Information',
        cooldown: 3
      });
    }

    async run(message) {

       const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Colossal\'s Credits')
      .setDescription('Give\'s proper reconigiton to people who helped within the continuation of this project.')
      .addFields(
		    { name: '\u200B', value: '\u200B'},
		    { name: 'Graphics Designers', value: '<@661815646564253696>, <@654395996242968578>', inline: true },
		    { name: 'Code Testers', value: '<@661815646564253696>, <@744138562580119634>, <@616982678482321423>, <@654395996242968578> ', inline: false },
	    )
                      
       return message.channel.send(embed);
    }
};