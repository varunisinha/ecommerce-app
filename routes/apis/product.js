const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');


router.get('/', (request, response) => {
  Product.findAll({
    attributes: ['id', 'productName', 'productPrice', 'productStock'],
    include: [
      { model: Category, attributes: ['categoryName'] },
      { model: Tag, attributes: ['tagName'] }
    ]
  })
    .then(product_data => response.json(product_data))
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});

router.get('/:id', (request, response) => {
  Product.findOne({
    where: { id: request.params.id },
    attributes: ['id', 'productName', 'productPrice', 'productStock'],
    include: [
      { model: Category, attributes: ['categoryName'] },
      { model: Tag, attributes: ['tagName'] }
    ]
  })
    .then(product_data => {
      if (!product_data) {
        response.status(404).json({ message: 'Product unavailable' });
        return;
      }
      response.json(product_data);
    })
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});

router.post('/', (request, response) => {
  Product.create({
    productName: request.body.productName,
    productPrice: request.body.productPrice,
    productStock: request.body.productStock,
    categoryId: request.body.categoryId,
    tagId: request.body.tagId
  })
    .then((product) => {
      if (request.body.tagId.length) {
        const producttagIdArr = request.body.tagId.map((tagId) => {
          return {
            productId: product.id,
            tagId,
          };
        });
        return ProductTag.bulkCreate(producttagIdArr);
      }
      response.status(200).json(product);
    })
    .then((producttagIds) => response.status(200).json(producttagIds))
    .catch((err) => {
      console.log(err);
      response.status(400).json(err);
    });
});

router.put('/:id', (request, res) => {
  Product.update(request.body, {
    where: {
      id: request.params.id,
    },
  })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.delete('/:id', (request, res) => {

  Product.destroy({
    where: {
      id: request.params.id
    }
  })
    .then(product_data => {
      if (!product_data) {
        rs.status(404).json({ message: 'product unavailable' });
        return;
      }
      res.json(product_data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
