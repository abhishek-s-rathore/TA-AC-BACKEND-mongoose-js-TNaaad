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
  User.create(data, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

app.get('/users', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.json({ users: users });
  });
});

// app.get('/users/:id', (req, res, next) => {
//   var id = req.params.id;
//   User.findById(id, (err, users) => {
//     if (err) return next(err);
//     res.json({ users: users });
//   });
// });

// app.get('/users/:id', (req, res, next) => {
//   var id = req.params.id;
//   User.find({ _id: id }, (err, users) => {
//     if (err) return next(err);
//     res.json({ users: users });
//   });
// });

app.get('/users/:id', (req, res, next) => {
  var id = req.params.id;
  User.findOne({ _id: id }, (err, users) => {
    if (err) return next(err);
    res.json({ users: users });
  });
});

app.put('/users/:id', (req, res, next) => {
  var data = req.body;
  var id = req.params.id;
  User.findByIdAndUpdate(id, data, {new:true},(err, updatedUser) => {
    if (err) return next(err);
    res.json(updatedUser);
  });
});

app.delete('/users/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndDelete(id,(err, deletedUser) => {
      if (err) return next(err);
      res.send(`${deletedUser.name} is deleted.`);
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
app.listen(5555, 'localhost', () => {
  console.log(`Server connected to post 5555`);
});
