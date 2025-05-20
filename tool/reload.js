// update livereload file
const { stdin, stdout, argv } = require('node:process');
const fs = require('node:fs');

let hashStr = ''
const inSteam = stdin

inSteam.on('data', (data) => {
    hashStr += data.toString()
});

inSteam.on('end', () => {
    stdout.write(`document.dispatchEvent(new CustomEvent("livereloadUpdated", {detail:"${hashStr.trim()}"}));`)
})
