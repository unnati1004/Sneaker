const express = require('express')
const app = express()
const connect = require('./config/db');
const cors = require('cors'); 
const product = require('./controllers/product_controller')
app.use(express.json());
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use('/sneaker',product);
const port = 2345;
app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log(`listening on port ${port}`);
});