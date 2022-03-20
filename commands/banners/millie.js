const Command = require('../../structures/Command');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Guild = require('../../database/schemas/Guild');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'millie',
        aliases: ['millie\'s'],
        usage: '[user]',
        description: 'Displays millie\'s drawings',
        category: 'banners',
        cooldown: 3
      });
    }

    async run(message) {
//Start of buttons

const match = message.content.match(/\d{18}/);
let member = match ? message.guild.members.cache.get(match[0]) : message.member

if (!member) member = message.member

const embed1 = new Discord.MessageEmbed()
.setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic: true, size: 512 }), member.user.displayAvatarURL({ dynamic: true, size: 512 }))
.setDescription('These art works was made by my lovely girlfriend, she has recently started doing graphical design for me. This is just a showcase for them.')
.setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
.setTimestamp()
.setColor(member.displayHexColor);

const embed2 = new Discord.MessageEmbed()
.setTitle("Banner 1")
.setImage()
.setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
.setTimestamp()
.setColor(member.displayHexColor);

const embed3 = new Discord.MessageEmbed()
.setTitle("Banner 2")
.setImage()
.setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
.setTimestamp()
.setColor(member.displayHexColor);

      return message.channel.send(embed1).then(message.channel.send(embed2).then(message => {
        message.react('➡️')
      const filter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
      const collector = message.createReactionCollector(filter, {time:  15000 });   

      collector.on('collect', () => {
        message.reactions.removeAll();


        message.channel.edit(embed3)
      })}
      ))}
    }
