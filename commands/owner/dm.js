const Command = require('../../structures/Command');
const User = require('../../database/schemas/User')
module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'directmessage',
        aliases: [ 'dm' ],
        description: 'Contact a specific person through discord bot.',
        category: 'Owner',
        ownerOnly: true
      });
    }

    async run(message, args) {

            if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `You did not mention a user, or you gave an invalid id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("That user could not be DMed!"))
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    }
  }