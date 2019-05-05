const { Command, SwitchbladeEmbed } = require('../../')

module.exports = class Coinflip extends Command {
  constructor (client) {
    super(client, {
      name: 'coinflip',
      aliases: ['cf'],
      category: 'games'
    })
  }

  run ({ channel, author, t }) {
    const sides = ['heads', 'tails']
    const chosenSide = sides[Math.floor(Math.random() * sides.length)]
    const embed = new SwitchbladeEmbed(author)
    channel.startTyping()
    embed.setDescription(t('commands:coinflip.landed', { chosenSide }))
      .setImage(`https://raw.githubusercontent.com/bolsomito/koi/master/bin/assets/${chosenSide}.png`)
    channel.send(embed).then(() => channel.stopTyping())
  }
}
