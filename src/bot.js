const { Client, Collection } = require('discord.js')
const { token } = require("../config.json")

const client = new Client();

['commands', 'aliases'].forEach(f => client[f] = new Collection());
['comandos', 'eventos'].forEach(f => require(`./handlers/${f}`)(client));

client.login(token)
