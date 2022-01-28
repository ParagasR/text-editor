const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to use the client's dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get the htmlRoutes.js file
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
