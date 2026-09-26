const { bot } = require('../lib')

const ATD_GROUP_ID = '120363421019479646@g.us'

const REGISTER_LINK =
  'https://www.springpays.com/signup/1a42ab6656203c61ca2d24e19b49c7cd'

const ANDROID_LINK =
  'https://play.google.com/store/apps/details?id=co.appsquare.spring_pays'

const IPHONE_LINK =
  'https://apps.apple.com/my/app/spring-pays/id6476165888'

const HELPLINE = '018-2990000'

bot(
  {
    on: 'text',
    fromMe: false,
    type: 'atdFaq',
  },
  async (message) => {
    if (!message.jid.endsWith('@g.us')) return
    if (message.jid !== ATD_GROUP_ID) return

    const text = (message.text || '').toLowerCase().trim()

    // LINK APP
    if (
      text === 'link app' ||
      text === 'app' ||
      text.includes('link springpay') ||
      text.includes('link springpays')
    ) {
      return await message.send(
        `🔗 *LINK APP SPRINGPAYS*

🤖 Android:
${ANDROID_LINK}

🍎 iPhone:
${IPHONE_LINK}`
      )
    }

    // LINK DAFTAR
    if (
      text === 'link daftar' ||
      text === 'daftar agent' ||
      text.includes('link daftar agent')
    ) {
      return await message.send(
        `📝 *LINK DAFTAR AGENT*

Daftar melalui link ini:

${REGISTER_LINK}

✅ Pendaftaran melalui link ini akan masuk bawah leader.`
      )
    }

    // CARA LOGIN
    if (
      text === 'cara login' ||
      text === 'cara log in' ||
      text.includes('cara login springpays') ||
      text.includes('cara masuk app')
    ) {
      return await message.send(
        `📱 *CARA LOG IN SPRINGPAYS*

1️⃣ Download App SpringPays:

🤖 Android:
${ANDROID_LINK}
