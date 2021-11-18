const { Tag } = require('../models');

const data = [
  {
    tagName: 'Gray',
  },
  {
    tagName: 'Black',
  },
  {
    tagName: 'Red',
  },
  {
    tagName: 'White',
  }
];

const seedTags = () => Tag.bulkCreate(data);

module.exports = seedTags;
