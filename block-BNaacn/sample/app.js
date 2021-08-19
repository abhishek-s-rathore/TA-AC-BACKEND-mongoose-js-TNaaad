const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}),
  (err) => {
    console.log(err ? err : 'Connected to Database');
  };

let app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Home Page!');
});

app.listen(4444, 'localhost', () => {
  console.log(`Server listning to port 4444!`);
});
