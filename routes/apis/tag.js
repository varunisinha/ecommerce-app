const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (request, response) => {
  
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['productName', 'productPrice', 'productStock', 'categoryId']
    }
  })
    .then(tag_data => response.json(tag_data))
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});
router.get('/:id', (request, response) => {
  Tag.findOne({
    where: {
      id: request.params.id
    },
    include: {
      model: Product,
      attributes: ['productName', 'productPrice', 'productStock', 'categoryId']
    }
  })
    .then(tag_data => response.json(tag_data))
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});


router.post('/', (request, response) => {

  Tag.create({
    tagName: request.body.tagName
  })
    .then(tag_data => response.json(tag_data))
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});


router.put('/:id', (request, response) => {
  
  Tag.update(request.body, {
    where: {
      id: request.params.id
    }
  })
    .then(tag_data => {
      if (!tag_data){
        response.status(404).json({message:'Tag is not available!'});
        return;
      }
      response.json(tag_data);
    })
    .catch(err => {
      console.log(err);
      response.status(500).json(err);
    });
});

router.delete('/:id', (request, response) => {
  Tag.destroy({
    where: {
      id: request.params.id
    }
  })
  .then(tag_data => {
    if (!tag_data) {
      res.status(404).json({message: 'Tag is not available'});
      return;
    }
    response.json(tag_data);
  })
  .catch(err =>{
    console.log(err);
    response.status(500).json(err);
  });
});

module.exports = router;
