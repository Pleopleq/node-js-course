const path = require("path")
const fs = require("fs")
const productsPath = path.join(path.dirname(__dirname), 'data', 'products.json')

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        fs.readFile(productsPath, (err, data) => {
            let products = []

            if (!err) {
                products = JSON.parse(data)
            }

            products.push(this)

            fs.writeFile(productsPath, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static getAll(cb) {
        fs.readFile(productsPath, (err, fileContent) => {
            if (err) {
                return cb([])
            }

            cb(JSON.parse(fileContent))
        })
    }
}