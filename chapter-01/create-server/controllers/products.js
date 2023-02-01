const products = []

exports.getAddProduct = function(req, res, next) {
    res.render("add-product", { docTitle: "Add product" })
}

exports.postAddProduct = function(req, res, next) {
    products.push({ title: req.body.title })
    res.redirect("/")
}

exports.getProducts = function (req, res, next) {
    res.render("shop", { docTitle: 'Shop', products })
}