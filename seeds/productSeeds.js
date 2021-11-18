const { Product } = require('../models');

const data = [
  {
    productName: 'PUMA MENS PACER FUTURE SNEAKER - DARK GREY',
    productPrice: 69.99,
    productStock: 7,
    categoryId: 3,
  },
  {
    productName: 'ALDO Mens Hermond Oxford-White ',
    productPrice: 59.99,
    productStock: 10,
    categoryId: 5,
  },
  {
    productName: 'ADIDAS WOMENS RETRORUN SNEAKER - Black',
    productPrice: 49.99,
    productStock: 3,
    categoryId: 2,
  },
  {
    productName: 'NIKE WOMENS AIR MAX SC SNEAKER - White',
    productPrice: 74.99,
    productStock: 5,
    categoryId: 1,
  },

  {
    productName: 'CROCS UNISEX CLASSIC CLOG - White',
    productPrice: 49.99,
    productStock: 25,
    categoryId: 4
  }

];

const seedProducts = () => Product.bulkCreate(data);

module.exports = seedProducts;
