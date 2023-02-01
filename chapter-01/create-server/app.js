const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const adminRoutes = require("./routes/admin")
const shopRouter = require("./routes/shop")

const app = express()

app.set("view engine", "pug")
app.set("views", "views")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes)
app.use(shopRouter)

app.use(function(req, res, next) {
    res.status(404).render("404", { docTitle: "Error page"})
})

app.listen(3000)
