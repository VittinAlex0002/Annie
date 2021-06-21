module.exports = {

  config: {

    nome: 'beijar',                                                   
    aliases: ['kiss','beijo'],                              
    descricao: 'Comando que beija o usuário mencionado.',     
    utilizacao: '',                                              
    cooldown: 3                                                   
  },
  run: async (client, message, args) => {
	  const fetch = require("node-fetch")

var n = Math.round(Math.random()*15)

const discord = require("discord.js")
let user = message.mentions.users.first() || client.users.cache.get(args[0])
if(!user) return message.reply("selecione alguém para beijar!")
fetch('https://api.tenor.com/v1/search?tag=kiss+anime&key=S7TF4CPQ4ZDW&limit=16', { method: 'POST', body: 'a=1' })
    .then(res => res.json()) // expecting a json response
    .then(json => {
        var img = json.results[n].url
        message.channel.send("foi"+img)
    })
  }
}
