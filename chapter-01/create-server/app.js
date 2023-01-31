const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const adminData = require("./routes/admin")
const shopRouter = require("./routes/shop")


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.routes)
app.use(shopRouter)

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, "views", "404-error-page.html"))
})

app.listen(3000)
