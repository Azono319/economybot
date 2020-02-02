const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let bankrobbed = Math.floor(Math.random() * 300) +1;

if (args[0]) = (`bank`)
    let BankEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author} you robbed a bank and earned ${bankrobbed}!`)
    .setColor(client.config.colour)
    message.channel.send(BankEmbed)

    db.add(`money_${message.author.id}`, bankrobbed)

    let user = message.mentions.members.first()
    let target = await db.fetch(`money_${user.id}`)
    let moneyrobbed = Math.floor(Math.random() * 300) +1;

    if (!user) {
        return message.channel.send(`You forgot to mention a user to rob!`)
    }

    if (target < 1) {
        return message.channel.send(`${user.user.username} doesn't have any money!`)
    }


    let Embed = new Discord.RichEmbed()
    .setDescription(`${message.author} you robbed ${user} and managed to get ${moneyrobbed} from them!`)
    .setColor(client.config.colour)
    message.channel.send(Embed)


    db.subtract(`money_${user.id}`, moneyrobbed)
    db.add(`money_${message.author.id}`, moneyrobbed)
}
