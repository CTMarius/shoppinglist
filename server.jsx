import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shoppingListRoutes from './api/routes/shoppingListRoutes.jsx';

const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/journalapi?retryWrites=true&w=majority');

app.use(express.static('front'));

app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Replace with the appropriate origin(s)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', shoppingListRoutes);

var routes = require('./api/routes/journalRoutes'); //importing route
routes(app); //register the route

app.listen(port, 'localhost', () => {
  console.log(`API Server is running on port ${port}`);
});