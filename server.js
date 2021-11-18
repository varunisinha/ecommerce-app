
//importing required files
const express = require('express');
const routes = require('./routes');


const app = express();
//our app will run on this port
const PORT = process.env.PORT || 2020;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// listening to the port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


