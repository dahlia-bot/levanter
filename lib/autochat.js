const { bot } = require('../lib')

const REGISTER_LINK =
  'https://www.springpays.com/signup/1a42ab6656203c61ca2d24e19b49c7cd'

bot(
  {
    on: 'text',
    fromMe: false,
    type: 'dahliaAutoChat',
  },
  async (message) => {

    // Jangan reply dalam group
    if (message.jid.endsWith('@g.us')) return

    const text = (message.text || '').toLowerCase().trim()

    // NAK LINK
    if (
      text === 'nak link' ||
      text === 'nak link daftar' ||
      text === 'nak daftar' ||
      text === 'link'
    ) {
      return await message.send(
        `📝 *LINK PENDAFTARAN AGENT*

Berminat nak daftar sebagai agent?

Boleh daftar melalui link di bawah 👇

${REGISTER_LINK}

✅ Pendaftaran melalui link ini akan masuk bawah leader.`
      )
    }

    // CARA DAFTAR
    if (
      text === 'cara daftar' ||
      text === 'macam mana nak daftar' ||
      text === 'mcm mana nak daftar' ||
      text === 'cara register'
    ) {
      return await message.send(
        `📝 *CARA DAFTAR AGENT*

1️⃣ Tekan link pendaftaran:

${REGISTER_LINK}

2️⃣ Isi maklumat yang diperlukan.

3️⃣ Pastikan nombor telefon yang digunakan aktif.

4️⃣ Password sementara akan dihantar melalui SMS.

5️⃣ Download App SpringPays dan log masuk.

🤖 Android:
https://play.google.com/store/apps/details?id=co.appsquare.spring_pays

🍎 iPhone:
https://apps.apple.com/my/app/spring-pays/id6476165888`
      )
    }

    // INFO AGENT
    if (
      text === 'info' ||
      text === 'nak tahu' ||
      text === 'info agent' ||
      text === 'nak tahu lebih lanjut'
    ) {
      return await message.send(
        `✨ *INFO AGENT SPRINGPAYS*

📱 Daftar sebagai agent
💰 Jana komisen melalui transaksi
👥 Boleh bina team sendiri
📲 Urusan melalui App SpringPays

Berminat nak daftar?

👉 Taip *NAK LINK*`
      )
    }
  }
)
