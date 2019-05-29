const express = require('express');
const app = express();

let orders = []; // "orders" array will store 1 object for each order

app.use('/img', express.static('img')); // Static images folder


app.get('/', (req, res) => res.render('reservation.ejs'));
app.get('/orders', (req, res) => res.render('orders/new.ejs'));

// CREATE NEW ORDER IN DATABASE
app.post('/order', (req, res) => {
  // Save user input from request body into individual variables
  var client = req.body.client;
  var bags = req.body.bags;
  // Redirect back to order form
  res.redirect('/');
});

app.listen(3000, () => console.log('Fair Foods Reservation System listening on port 3000!'))