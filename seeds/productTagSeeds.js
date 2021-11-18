const { ProductTag } = require('../models');

const productdata = [
  {
    productId: 2,
    tagId: 4,
  },
  {
    productId: 3,
    tagId: 1,
  },
  {
    productId: 4,
    tagId: 2,
  },
  {
    productId: 1,
    tagId: 4,
  },
  {

    productId: 5,
    tagId: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productdata);

module.exports = seedProductTags;
