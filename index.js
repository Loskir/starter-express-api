const express = require('express')
const {Bot, webhookCallback} = require('grammy')

const bot = new Bot(process.env.TOKEN)
bot.command('start', (ctx) => ctx.reply('Welcome! Up and running (cyclic)'))

bot.command('test', async (ctx) => {
  const s = Date.now()
  await ctx.reply('hi!')
  const t = Date.now() - s
  return ctx.reply(`that took ${t}ms`)
})

const app = express()
app.use(express.json())
app.post('/'+process.env.TOKEN, webhookCallback(bot, 'express'))
app.post('/ping', (req, res) => res.end('pong'))
app.listen(process.env.PORT || 3000)
