const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

let app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(5510, 'localhost', () => {
  console.log('Server listning to port 5510!');
});
