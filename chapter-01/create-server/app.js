const bodyParser = require("body-parser")
const express = require("express")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.use("/add-product" ,(req, res, next) => {
    res.send(`
    <form action="/product" method="POST">
        <input type="text" name="title" id="title">
        <button type="submit">Send</button>
    </form>`)
})

app.post("/product", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

app.use((req, res, next) => {
    res.send("<h1>USING EXPRESS</h1>")
})

app.listen(3000)
