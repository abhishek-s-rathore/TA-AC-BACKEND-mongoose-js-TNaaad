// Requiring THe Packages
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Requiring The Models
const User = require('./models/user');

// Connecting To MongoDB By Mongoose
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);

// Initializing The Server
let app = express();

// Middlewares
//1. In-built
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/assets'));

//2. Third Party

//3. Custom

// Routes
app.post('/users', (req, res, next) => {
  var data = req.body;
  console.log(data);
  User.insert(data, { new: true }, (err, user) => {
    next(err);
    res.json(user);
  });
});

// Error Handlers
// 1. 404
app.use((req, res) => {
  res.send('Error: 404, Page not found');
});

// Custom
app.use((err, req, res, next) => {
  res.send(err);
});

// Connecting App To Server
app.listen(5510, 'localhost', () => {
  console.log(`Server connected to post 5510`);
});
