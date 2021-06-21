const cor = require("chalk")
module.exports = (client) => {
    var cmd = console.log
    let servers = client.guilds.cache.map(g => g.name + " - " + g.members.cache.size+"\n")
    cmd(cor.green(`
==========================================

Nome: ${client.user.tag}
Id: ${client.user.id}
Membros: ${client.users.cache.size}
Servers: 
${servers}

==========================================
`))
//array de objetos com os status
const status = [
  {
    type: 'WATCHING',
    message: `${client.users.cache.size} usuários`
  },
  {
    type: 'PLAYING',
    message: `Eu amo pizza 🍕`
  },
],
  randomStatus = status[Math.floor(Math.random() * status.length)]; //pegando um index aleatorio da array de objetos

setInterval(() => {//função que ira trocar o status do bot a cada 30s
  client.user.setActivity(randomStatus.message, { type: randomStatus.type });
}, 5000); //1s = 1000ms 30000 = 30s;

}
