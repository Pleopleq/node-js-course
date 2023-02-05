const path = require("path")
const fs = require("fs")

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const productsPath = path.join(path.dirname(__dirname), 'data', 'products.json')

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
        const productsPath = path.join(path.dirname(__dirname), 'data', 'products.json')

        fs.readFile(productsPath, (err, fileContent) => {
            if (err) {
                cb([])
            }

            cb(JSON.parse(fileContent))
        })
    }
}