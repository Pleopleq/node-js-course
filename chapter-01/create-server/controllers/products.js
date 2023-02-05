const Product = require("../models/product")

exports.getAddProduct = function (req, res, next) {
    res.render("add-product", { docTitle: "Add product" })
}

exports.postAddProduct = function (req, res, next) {
    const product = new Product(req.body.title)
    product.save()
    res.redirect("/")
}

exports.getProducts = function (req, res, next) {
    Product.getAll((products) => {
        res.render("shop", { docTitle: 'Shop', products })
    })
}