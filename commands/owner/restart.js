const Command = require('../../structures/Command');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'restart',
        aliases: [ 'reboot' ],
        description: 'Restart the bot!',
        category: 'Owner',
        ownerOnly: true
      });
    }

    async run(message) {
        let sentMessage;
        message
          .reply("Restarting...").catch(err => this.client.console.error(err)).then((message) => {
      process.exit(1)
      sentMessage = message;
      })
            .then(async () => {
                await this.client.wait(2000); //Sleep for 2 secs
                sentMessage.edit("Restarted!");
            });
    }
};
