const express = require("express")

const app = express()

app.use("/add-product" ,(req, res, next) => {
    console.log("MIDDLEWARE TRIGGERED")
    res.send("<h1>ADD PRODUCT PAGE</h1>")
})

app.use((req, res, next) => {
    console.log("MIDDLEWARE TRIGGERED AGAEN")
    res.send("<h1>USING EXPRESS</h1>")
})

app.listen(3000)
