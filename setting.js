const fs = require('fs')
const chalk = require('chalk')
global.owner = ['6282221792667']
global.ownernomer = "6282221792667"
global.premium = ['6282221792667']
global.packname = 'Sticker By'
global.author = 'BOTCAHX'
global.sessionName = 'session'
global.jumlha = '999'
global.jumhal = '110000000000000000'
global.jumlah = '11000000000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
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
global.mygit = 'https://github.com/BOTCAHX'
global.webmy = 'https://api.botcahx.biz.id'
global.ghme = 'https://github.com/BOTCAHX'
global.gcbot = "https://api.botcahx.biz.id"
global.botname = 'BOTCAHX'
global.omlen = '© TioXd'
global.weem = 'BOTCAHX'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
