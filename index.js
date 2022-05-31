const express = require('express')
const {Bot, webhookCallback} = require('grammy')

const bot = new Bot(process.env.TOKEN)
bot.command('start', (ctx) => ctx.reply('Welcome! Up and running (cyclic)'))

const app = express()
app.use(express.json())
app.post('/'+process.env.TOKEN, webhookCallback(bot, 'express'))
app.listen(process.env.PORT || 3000)
