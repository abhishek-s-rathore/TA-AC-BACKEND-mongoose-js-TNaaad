var express = require('express');
var mongoose = require('mongoose');

// Connection to mongoDB database
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);
// Initializing the app
var app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

// Listning to Server
app.listen(4000, () => {
  console.log(`Server listning to port 4000!`);
});
