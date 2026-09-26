const { bot } = require('../lib')

// =========================
// ATD GROUP ID
// =========================
const ATD_GROUP_ID = 'ISI_ID_ATD_GROUP_DI_SINI'

// =========================
// SPRINGPAYS
// =========================
const REGISTER_LINK =
  'https://www.springpays.com/signup/1a42ab6656203c61ca2d24e19b49c7cd'

const ANDROID_LINK =
  'https://play.google.com/store/apps/details?id=co.appsquare.spring_pays'

const IPHONE_LINK =
  'https://apps.apple.com/my/app/spring-pays/id6476165888'

const HELPLINE = '018-2990000'


// ==================================================
// FAQ ATD GROUP
// ==================================================

bot(
  {
    on: 'text',
    fromMe: false,
    type: 'atdFaq',
    onlyGroup: true,
  },
  async (message) => {

    // Hanya aktif dalam ATD GROUP
    if (message.jid !== ATD_GROUP_ID) return

    const text = (message.text || '').toLowerCase().trim()


    // =========================
    // LINK APP
    // =========================
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


    // =========================
    // LINK DAFTAR AGENT
    // =========================
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


    // =========================
    // CARA LOGIN
    // =========================
    if (
      text === 'cara login' ||
      text === 'cara log in' ||
      text.includes('cara login springpay') ||
      text.includes('cara masuk app')
    ) {
      return await message.send(
        `📱 *CARA LOG IN SPRINGPAYS*

*Step 1*
Download App:

🤖 Android:
${ANDROID_LINK}

🍎 iPhone:
${IPHONE_LINK}

*Step 2*
Selepas daftar, password sementara akan dihantar melalui SMS ke nombor telefon anda.

Jika selepas 30 minit masih tidak menerima SMS, hubungi Helpline SpringPays:

📞 ${HELPLINE}

*Step 3*
Masukkan:

👤 Username: No. telefon
🔐 Password: Password sementara dalam SMS

*Step 4*
Tukar password.

Current Password:
Masukkan password sementara.

New Password:
Cipta password baru.

*Step 5*
Anda akan menerima TAC melalui SMS.

Jika tiada TAC selepas 10 minit, hubungi:

📞 ${HELPLINE}

*Step 6*
Selepas berjaya log in, buat verification akaun:

Profile → My Info → Account Verification

Upload gambar yang diperlukan dan tunggu pihak SPRINGPAYS verify akaun dalam masa 24 JAM.

✅ Selepas akaun sudah verified, maklumkan kepada kami untuk proses pindah modal.`
      )
    }


    // =========================
    // TAMBAH MODAL
    // =========================
    if (
      text === 'tambah modal' ||
      text === 'reload modal' ||
      text.includes('waktu tambah modal') ||
      text.includes('waktu modal') ||
      text.includes('jam tambah modal')
    ) {
      return await message.send(
        `💰 *TAMBAH MODAL*

Waktu tambah modal:

🕐 8:30 pagi – 11:30 malam`
      )
    }


    // =========================
    // KOMISEN
    // =========================
    if (
      text === 'komisen' ||
      text === 'commission' ||
      text.includes('berapa komisen')
    ) {
      return await message.send(
        `💵 *KOMISEN*

Kadar komisen bergantung kepada produk dan transaksi.

Untuk semakan komisen semasa, boleh rujuk dalam app SpringPays.`
      )
    }


    // =========================
    // HELPLINE
    // =========================
    if (
      text === 'helpline' ||
      text === 'no helpline' ||
      text === 'nombor helpline' ||
      text.includes('masalah app') ||
      text.includes('masalah sistem')
    ) {
      return await message.send(
        `📞 *HELPLINE SPRINGPAYS*

Untuk masalah berkaitan app, SMS password sementara atau TAC:

📞 ${HELPLINE}`
      )
    }
  }
)


// ==================================================
// AUTO WELCOME
// ==================================================
//
// Teks welcome:
// Assalamualaikum & hai awak
// @mention nama ahli baru
// ==================================================

bot(
  {
    on: 'participant',
    fromMe: false,
    type: 'atdWelcome',
  },
  async (message) => {

    // Hanya untuk ATD GROUP
    if (message.jid !== ATD_GROUP_ID) return

    // Ambil ahli yang baru masuk
    const participants =
      message.participants ||
      message.participant ||
      []

    const users = Array.isArray(participants)
      ? participants
      : [participants]

    for (const user of users) {

      if (!user) continue

      const jid =
        typeof user === 'string'
          ? user
          : user.id || user.jid

      if (!jid) continue

      const welcome =
        `Assalamualaikum & hai awak 👋 @${jid.split('@')[0]}

Selamat datang ke group kita 🤗

Semoga baik-baik selalu..

Kalau ada apa-apa yang nak ditanya, boleh tanya dalam group ni ya 😊`

      await message.send(
        welcome,
        {
          mentions: [jid],
        }
      )
    }
  }
)
