const {
  bot,
  setMessage,
  enableGreetings,
} = require('../lib')


// ==================================================
// ATD AUTO GROUP
// ==================================================

const ATD_GROUP_ID = '120363421019479646@g.us'


// ==================================================
// AUTO WELCOME
// ==================================================

const WELCOME_MESSAGE = `🎉 WELCOME KE GROUP ATD! 🎉

Assalamualaikum & hello &mention ❤️

Terima kasih kerana menyertai Group ATD.

🤖 Perlukan bantuan? Taip MENU untuk lihat panduan yang tersedia.

⏰ Reload Modal: 9:00 AM – 11:55 PM sahaja.

📌 Sila gunakan group dengan baik & elakkan spam.

❤️ Selamat berniaga & semoga dipermudahkan!

👉 Taip MENU untuk lihat senarai bantuan.`


bot(
  {
    pattern: 'atdwelcome',
    desc: 'Setup Auto Welcome Group ATD',
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
      '✅ Auto Welcome Group ATD telah diaktifkan.'
    )
  }
)


// ==================================================
// ATD AUTO MENU
// ==================================================

const MENU = `🤖 ATD AUTO MENU

Sila taip keyword yang diperlukan 👇

💰 RELOAD MODAL

📱 TOPUP RELOAD

🌐 TOPUP DATA INTERNET

🎫 TOPUP PIN

🎮 GAME PIN

🎮 GAME TOPUP

🌍 INTERNATIONAL TOPUP

🌐 INTERNATIONAL INTERNET

📞 PHONE BILL

💡 UTILITY BILL

💵 KOMISEN

📝 DAFTAR AGENT

🔐 CARA LOGIN

📲 LINK APP

☎️ HELPLINE

❤️ ATD Auto Assistant sedia membantu.`


bot(
  {
    pattern: 'menu',
    desc: 'ATD Auto Menu',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return
    return await message.send(MENU)
  }
)


// ==================================================
// CARA TOPUP RELOAD
// ==================================================

bot(
  {
    pattern: 'reload modal',
    desc: 'Cara Reload Modal',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🎫 CARA TOPUP RELOAD

📌 Masukkan mobile phone customer
💰 Taip amount / tekan amount
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA TOPUP DATA INTERNET
// ==================================================

bot(
  {
    pattern: 'topup data',
    desc: 'Cara Topup Data Internet',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🎫 CARA TOPUP DATA INTERNET

📌 Masukkan mobile phone customer
✅ Tekan Verify
🌐 Pilih plan internet
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA TOPUP PIN
// ==================================================

bot(
  {
    pattern: 'topup pin',
    desc: 'Cara Topup PIN',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🎫 CARA TOPUP PIN

💰 Pilih amount
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA GAME PIN
// ==================================================

bot(
  {
    pattern: 'game pin',
    desc: 'Cara Game PIN',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🎮 CARA GAME PIN

💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA GAME TOPUP
// ==================================================

bot(
  {
    pattern: 'game topup',
    desc: 'Cara Game Topup',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🎮 CARA GAME TOPUP

📌 Masukkan User ID game
📌 Zone ID = nombor dalam kurungan
💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA INTERNATIONAL TOPUP
// ==================================================

bot(
  {
    pattern: 'international topup',
    desc: 'Cara International Topup',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🌍 CARA INTERNATIONAL TOPUP

📌 Masukkan no customer
✅ Tekan Verify
💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA INTERNATIONAL INTERNET
// ==================================================

bot(
  {
    pattern: 'international internet',
    desc: 'Cara International Internet',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🌍 CARA INTERNATIONAL INTERNET

📌 Masukkan no customer
✅ Tekan Verify
💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA BAYAR PHONE BILL
// ==================================================

bot(
  {
    pattern: 'phone bill',
    desc: 'Cara Bayar Phone Bill',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🎫 CARA BAYAR PHONE BILL

📌 Masukkan mobile phone / acc number customer
💰 Masukkan amount
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA BAYAR UTILITY BILL
// ==================================================

bot(
  {
    pattern: 'utility bill',
    desc: 'Cara Bayar Utility Bill',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🎫 CARA BAYAR UTILITY BILL

📌 Masukkan acc number bill
🔎 Sesetengah bill boleh check baki
💰 Masukkan amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA SEMAK KOMISEN
// ==================================================

bot(
  {
    pattern: 'komisen',
    desc: 'Cara Semak Komisen',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`💵 CARA SEMAK KOMISEN

👤 Tekan Profile
🔎 Cari My Discount Info
➡️ Tekan My Discount Info

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// DAFTAR AGENT
// ==================================================

bot(
  {
    pattern: 'daftar agent',
    desc: 'Daftar Agent ATD',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`📝 DAFTAR AGENT

📲 Link Register:

https://www.springpays.com/signup/1a42ab6656203c61ca2d24e19b49c7cd

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// CARA LOGIN
// ==================================================

bot(
  {
    pattern: 'login',
    desc: 'Cara Login',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`🔐 CARA LOGIN

📌 Allowkan detail kalau naik tanda

👤 Username: No. Phone

🔑 Password: Check mesej SpringPay

🔐 Current Password: Sama

🔑 New Password: Masukkan password baru

🔑 Confirm Password: Masukkan password baru

❌ Kalau tak boleh login, screenshot dan hantar dekat Helpline SpringPay.

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// LINK APP
// ==================================================

bot(
  {
    pattern: 'link app',
    desc: 'Link App Spring Pays',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`📲 LINK APP

🤖 Android:
https://play.google.com/store/apps/details?id=co.appsquare.spring_pays

🍎 iPhone:
https://apps.apple.com/my/app/spring-pays/id6476165888

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)


// ==================================================
// HELPLINE
// ==================================================

bot(
  {
    pattern: 'helpline',
    desc: 'Helpline ATD',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (message.jid !== ATD_GROUP_ID) return

    return await message.send(`☎️ HELPLINE

📲 WhatsApp: 018-2990000

📅 Jumaat: CUTI

🙏 Harap bersabar. Helpline akan respon sekejap lagi.

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)
