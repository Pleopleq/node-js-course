const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if(url === "/") {
        res.write('<html>')
        res.write('<head><title>FIRST PAGE LES GOOO WHERES THE MONEY</title></head>')
        res.write(`<body>
        <h1>HELLO FROM MY NODE JS SERVER</h1>
            <form action="/message" method="post">
                <input type="text" name="message">
                <button type="submit">Submit</button>
            </form>
        </body>`)
        res.write('</html>')
        return res.end() 
    }

    if(url === "/message" && method === "POST") {
        const body = []

        req.on('data', function(chunk) {
            body.push(chunk)
        })

        req.on('end', function() {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")[1]
            fs.writeFileSync('message.txt', message)
        })

        res.writeHead(302, {
            Location: "/"
        })

        return res.end()
    }

    res.setHeader('Content-Type', "text/html");
    res.write('<html>')
    res.write('<head><title>FIRST PAGE LES GOOO WHERES THE MONEY</title></head>')
    res.write('<body><h1>OTHER PAGE</h1></body>')
    res.write('</html>')
    res.end()    
})

server.listen(3000)
