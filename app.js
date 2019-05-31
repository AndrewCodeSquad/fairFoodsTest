const express = require('express');
const app = express();
const bodyParser = require('body-parser');          // Require body-parser package 
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser on all requests
let orders = []; // "orders" array will store 1 object for each order
let orderTotal = 0; // Sum of all bags ordered
let message = ''; // "message" will tell user their order was accepted

app.use('/css', express.static('css')); // Static CSS folder
app.use('/img', express.static('img')); // Static images folder

// MAIN ROUTE
app.get('/', (req, res) => res.render('reservation.ejs', { message: message }));
// app.get('/', (req, res) => res.send('Fair Foods Reservation System'));

// LIST ALL ORDERS (for use by Lena Park staff)
app.get('/allOrders', (req, res) => res.render('allOrders.ejs', { orders: orders, orderTotal: orderTotal }));

// CREATE NEW ORDER
app.post('/order', (req, res) => {
  orders.push({clientName: req.body.clientName, bags: req.body.bags}); // push order into array
  console.log(orders);
  message = 'Order accepted: ' + req.body.clientName + ', ' + req.body.bags + ' bags. Thanks for your order!';
  // Redirect back to order form
  res.redirect('/');
});

app.listen(3000, () => console.log('Fair Foods Reservation System listening on port 3000!'))