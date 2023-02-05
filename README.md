# CATATAN ( NOTE )
sc ini hanyalah hasil recode dari sc asli hisoka
saya hanya memperbaiki sebagian fitur yg error.



## NOTE
Skrip ini untuk semua orang, bukan untuk Dijual. 

<p align="center">
	<img src="https://telegra.ph/file/2f2dff89c65c9e5a1dddc.png" width="35%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">BOTCAHX</h1>

This is Script of WhatsApp multi device, working with [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)

## Group Discussion
- Join grup jika kamu nanya, kamu bertanya-tanya.
[`Group Link`](https://chat.whatsapp.com/D6BZVRSymWaFU28t2lxaO0)
## My Project
* Script Plugins [`Go here`](https://github.com/BOTCAHX/RTXZY-MD) (`Multiple Sessions Bot`)
* Original Script [`DikaArdnt/Hisoka-Morrow`](https://github.com/DikaArdnt/Hisoka-Morrow) (Sc Original)
* WhatsApp Bot Using Library whatsapp-web.js [`hisoka-waweb.js`](https://github.com/Hisoka-Morrou/hisoka-waweb.js/)

## Setting Autotyping & Recording
- Tambahkan tanda ```/** ``` dan ``` **/```  untuk mengaktifkan / menonaktifkan fitur tersebut
- Edit Di Baris [`Line`](https://github.com/BOTCAHX/Hoream-MD/blob/b963a8c8c656a93acad7c0df9dad6c1a5ecef744/tio.js#L191)
- Contoh Mematikan:
```

        /**if (m.message) {
tio.sendPresenceUpdate('composing', m.chat)
tio.readMessages([m.key])
}
 if (m.message) {
tio.sendPresenceUpdate('recording', m.chat)
tio.readMessages([m.key])
}**/

```
- Contoh Mengaktifkan
```
if (m.message) {
tio.sendPresenceUpdate('composing', m.chat)
tio.readMessages([m.key])
}
 if (m.message) {
tio.sendPresenceUpdate('recording', m.chat)
tio.readMessages([m.key])
}
```

## UNTUK PENGGUNA WINDOWS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)


```bash
git clone https://github.com/BOTCAHX/Hoream-MD 
cd Hoream-MD 
npm install
```

## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
git clone https://github.com/BOTCAHX/Hoream-MD 
cd Hoream-MD 
npm install
```

## RECOMMENDED INSTALL ON TERMUX

```bash
pkg install yarn
yarn
```

## Installing
```bash
$ npm start
```

## Thanks To
* [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`BOTCAHX`](https://github.com/MhankBarBar)
* [`DikaArdnt`](https://github.com/DikaArdnt)
* [`Fatih Arridho`](https://github.com/BOTCAHX)
* [`Naze Dev`](https://github.com/nazedev)

```Thanks to all who have participated in the development of this script```
