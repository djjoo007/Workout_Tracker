//Server Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Atlas connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

//Routes
app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

//Morgan
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`App running on ${PORT}!`);
});