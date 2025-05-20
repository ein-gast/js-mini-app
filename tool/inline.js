// inline js code into html
const { stdin, stdout, argv } = require('node:process');
const fs = require('node:fs');

const inHtml = "src/index.html"
const inJs =  argv.length>2?argv[2]: ":stdin"

let htmlStr = fs.readFileSync(inHtml).toString()
let jsStr = ''

const inSteam = inJs === ":stdin"?process.stdin:fs.createReadStream(inJs)

inSteam.on('data', (data) => {
    jsStr += data.toString()
});

inSteam.on('end', () => {
    const result = htmlStr.replace(
        new RegExp('<script.*/\\* inline \\*/.*</script>'),
        '<script type="module">'+jsStr+'</script>',
    )
    stdout.write(result)
})
