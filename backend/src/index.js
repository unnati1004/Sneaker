const express = require('express')
const app = express()
require("dotenv").config();
const connect = require('./config/db');
const cors = require('cors'); 
const product = require('./controllers/product_controller');
const cart = require('./controllers/cart_controllers');
app.use(express.json());
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use('/sneaker',product);
app.use('/cart',cart);
const port = process.env.PORT || 2345;
app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log(`listening on port ${port}`);
});