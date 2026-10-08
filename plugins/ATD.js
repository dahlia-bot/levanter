const {
  bot,
  setMessage,
  enableGreetings,
  getMessage,
  lang,
} = require('../lib')

const ATD_GROUP_ID = '120363421019479646@g.us'

const WELCOME_MESSAGE = `🎉 WELCOME KE GROUP ATD! 🎉

Assalamualaikum & hello &mention ❤️

Terima kasih kerana menyertai Group ATD.

🤖 Perlukan bantuan? Taip MENU untuk lihat panduan yang tersedia.

⏰ Reload Modal: 9:00 AM – 11:55 PM sahaja.

📌 Sila gunakan group dengan baik & elakkan spam.

❤️ Selamat berniaga & semoga dipermudahkan!

👉 Taip MENU untuk lihat senarai bantuan.`


// ===============================
// SETUP AUTO WELCOME ATD
// ===============================

bot(
  {
    pattern: 'atdwelcome',
    desc: 'Setup auto welcome Group ATD',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    await setMessage(
      message.jid,
      'welcome',
      WELCOME_MESSAGE,
      true,
      message.id
    )

    await enableGreetings(
      message.jid,
      'welcome',
      'on',
      message.id
    )

    return await message.send(
      '✅ Auto Welcome ATD telah diaktifkan.'
    )
  }
)
