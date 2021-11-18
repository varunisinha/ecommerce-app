
const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/:id', (request, response) => {
  Category.findOne({
    where: {
      id: request.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'productName', 'productPrice', 'productStock', 'categoryId']
    }
  })
    .then(categories_data => {
      if (!categories_data) {
        response.status(404).json({ message: 'Categories unavailable' });
        return;
      }
      response.json(categories_data);
    })
    .catch(err => {
      console.log(err);
      response.status(500).json(err)
    });
});


router.post('/', (request, response) => {

  Category.create({
    categoryName: request.body.categoryName
  })
    .then(categories_data => response.json(categories_data))
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});




router.put('/:id', (request, response) => {

  Category.update(request.body, {
    where: {
      id: request.params.id
    }
  })
    .then(categories_data => {
      console.log(categories_data)
      if (!categories_data) {
        response.status(404).json({ message: 'Category unavailable!' });
        return;
      }
      response.json(categories_data);
    })
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});


router.delete('/:id', (request, response) => {

  Category.destroy({
    where: {
      id: request.params.id
    }
  })
    .then(categories_data => {
      if (!categories_data) {
        response.status(404).json({ message: 'Category unavailable!' });
        return;
      }
      response.json(categories_data);
    })
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});


router.get('/', (request, response) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'productName', 'productPrice', 'productStock', 'categoryId']
    }
  })
    .then(categories_data => {
      if (!categories_data) {
        response.status(404).json({ message: 'Categories unavailable' });
        return;
      }
      response.json(categories_data);
    })
    .catch(err => {
      console.log(err);
      response.status(500).json(err)
    });
});


module.exports = router;
