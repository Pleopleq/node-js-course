const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const adminRoutes = require("./routes/admin")
const shopRouter = require("./routes/shop")
const errorController = require("./controllers/error")

const app = express()

app.set("view engine", "pug")
app.set("views", "views")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes)
app.use(shopRouter)

app.use(errorController.get404page)

app.listen(3000)
