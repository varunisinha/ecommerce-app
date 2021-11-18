const { Category } = require('../models');
const categories_data = [
  {
    categoryName: 'Nike',
  },
  {
    categoryName: 'Adidas',
  },
  {
    categoryName: 'Puma',
  },
  {
    categoryName: 'Crocs',
  },
  {
    categoryName: 'Aldo',
  },
];

const seedCategories = () => Category.bulkCreate(categories_data);
module.exports = seedCategories;
