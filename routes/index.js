const route = require('express').Router();
const api = require('./apis');

route.use('/e-commerce-backend', api);

route.use((request, response) => {
  response.send("404 Not Found!")
});

module.exports = route;