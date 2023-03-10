const Product = require('../models/product');
const Cart = require("../models/cart")

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch((err) => {
    console.log(err)
  })
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId
  Product.findByPk(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: "Product details",
        path: '/product/details'
      })
    })
    .catch(err => console.log(err))
}

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch((err) => {
    console.log(err)
  })
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products =>  {
      const cartProducts = []
      for(product of products) {
        const cartProductsData = cart.products.find(prod => prod.id === product.id)

        if(cartProductsData) {
          cartProducts.push({productData: product, qty: cartProductsData.qty})
        }
      }

      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
        });
    })
  })
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId

  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price)
  })

  res.redirect('/cart')
};

exports.deleteCartItem = (req, res, next) => {
  const prodId = req.body.productId
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price)
    res.redirect("/cart")
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
