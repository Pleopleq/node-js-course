const bodyParser = require("body-parser")
const express = require("express")
const adminRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.use(adminRouter)
app.use(shopRouter)

app.use(function(req,res, next) {
    res.status(404).send("<h1>ERROR 404 - PAGE NOT FOUND</h1>")
})

app.listen(3000)
