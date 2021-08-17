const express = require('express');
const mongoose = require('mongoose');

let app = express();

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(5555, 'localhost', () => {
  console.log('Server listning to port 5555!');
});
