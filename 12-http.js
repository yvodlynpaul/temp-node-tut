const http = require("http")

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end("Welcome to my youtube chanel")
    }
    if (req.url ==='/about'){
        res.end("Here our history")
    }
    res.end(`<h1>Oupppps! the page doesn't exists!!!</h1><a> href="/">back to home</a>`)
})

server.listen(5000)

