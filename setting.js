const fs = require('fs')
const chalk = require('chalk')
global.owner = ['6281386945391']
global.ownernomer = "6281386945391"
global.premium = ['6281386945391']
global.packname = 'Sticker By'
global.author = '๐๐ผ๐ ๐ข๐ณ๐ณ๐ถ๐ฐ๐ถ๐ฎ๐น ๐ก๐ฎ๐ถ ๐ฆ๐๐ผ๐ฟ๐ฒ'
global.sessionName = 'session'
global.jumlha = '999'
global.jumhal = '110000000000000000'
global.jumlah = '11000000000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'โDone',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/image/tio.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/nizarrahman'
global.webmy = 'https://www.nizarr.my.id'
global.ghme = 'https://github.com/nizarrahman'
global.gcbot = "https://www.nizarr.my.id"
global.botname = '๐๐ผ๐ ๐ข๐ณ๐ณ๐ถ๐ฐ๐ถ๐ฎ๐น ๐ก๐ฎ๐ถ ๐ฆ๐๐ผ๐ฟ๐ฒ'
global.omlen = 'ยฉ ๐๐ผ๐ ๐ข๐ณ๐ณ๐ถ๐ฐ๐ถ๐ฎ๐น ๐ก๐ฎ๐ถ ๐ฆ๐๐ผ๐ฟ๐ฒ'
global.weem = '๐๐ผ๐ ๐ข๐ณ๐ณ๐ถ๐ฐ๐ถ๐ฎ๐น ๐ก๐ฎ๐ถ ๐ฆ๐๐ผ๐ฟ๐ฒ'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
