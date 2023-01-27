const http = require("http")

const server = http.createServer((req, res) => {
    console.log("URL: ", req.url, "METHOD: ", req.method)
    res.setHeader('Content-Type', "text/html");
    res.write('<html>')
    res.write('<head><title>FIRST PAGE LES GOOO WHERES THE MONEY</title></head>')
    res.write('<body><h1>HELLO FROM MY NODE JS SERVER</h1></body>')
    res.write('</html>')
    res.end()    

    console.log("HEADERS: ", req.headers)
})

server.listen(3000)
