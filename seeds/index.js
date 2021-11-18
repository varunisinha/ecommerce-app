const seedCategories = require('./categorySeeds');
const seedProducts = require('./productSeeds');
const seedTags = require('./tagSeeds');
const seedProductTags = require('./productTagSeeds');
const sequelize = require('../config/conn');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategories();
  await seedProducts();
  await seedTags();
  await seedProductTags();
  process.exit(0);
};

seedAll();
