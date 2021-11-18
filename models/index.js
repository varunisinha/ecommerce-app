//requiring necessary files

const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, { foreignKey: 'categoryId' });

Category.hasMany(Product, { foreignKey: 'categoryId' });

Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'productId', });

Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tagId', });


//exporting modules for use elsewhere in the project
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
