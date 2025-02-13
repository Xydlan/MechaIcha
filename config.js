//Punya Icha jangan di jual ya

global.owner = [
  "6281400346604", //ganti nomor owner
  "6281387796894" //nomor owner kedua kalo ada
]
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})