const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "17245423663"
global.ownername = "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀"
global.ytname = "YT:kenzo"
global.socialm = "GitHub:toge1234"
global.location = "Indian"

global.ownername = '𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀' //owner name
global.botname = '𝚈𝚄𝙼𝙴𝙺𝙾' //name of the bot

//sticker details
global.stickername = '𝚈𝚄𝙼𝙴𝙺𝙾'
global.packname = '𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀'
global.author = '𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀'
//console view/theme
global.themeemoji = '🇬🇦'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/CL0rq2IZaUC14T748pthdQ'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
