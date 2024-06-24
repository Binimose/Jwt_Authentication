 const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const app = express();
const path = require('path');
const indexRouter = require('./routes/authRoutes');
const  bodyParser = require("body-parser");

app.use(express.json());

// middleware
 app.use(express.static(path.join(__dirname, 'public')));

 app.use(express.static(path.join(__dirname, 'controllers')));

 app.use(express.static(path.join(__dirname, 'routes')));
// View engine
app.set('views', path.join(__dirname, 'view'));
 


app.set("view engine", "ejs");

 


// database connection
const dbURI = "mongodb+srv://bindani:2324mom@cluster0.bgdxkpe.mongodb.net/?retryWrites=true&w=majority";
 mongoose.connect(dbURI)
  .then(() => console.log("MongoDB Connected...."))
  .catch(err => console.log(err));

  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// routes
app.get('/', (req, res) => res.render('home.ejs'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);