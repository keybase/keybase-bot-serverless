'use strict'

const Bot = require('keybase-bot')
const bot = new Bot()

module.exports.notify = async event => {
  try {
    if (bot._initStatus !== 'initialized') {
      await bot.init(
        process.env.KB_USERNAME,
        process.env.KB_PAPERKEY,
        {
          keybaseBinaryLocation: '/var/task/bin/keybase',
        },
      )
      const username = bot.myInfo().username
      console.log(`Bot initialized with username ${username}.`)      
    }

    const username = bot.myInfo().username
    await bot.chat.send({
      name: `${username},${process.env.KB_TARGET_USER}`,
    }, {
      body: `Received an event:
\`\`\`
${JSON.stringify(event, null, 2)}
\`\`\``,
    })
    console.log('Finished sending the message.')
  } catch (error) {
    console.error(error)
  }

  return { message: 'Done!', event };
}
