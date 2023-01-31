const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("MIDDLEWARE TRIGGERED")
    next()
})

app.use((req, res, next) => {
    console.log("MIDDLEWARE TRIGGERED AGAEN")
    res.send("<h1>USING EXPRESS</h1>")
    next()
})

app.listen(3000)
