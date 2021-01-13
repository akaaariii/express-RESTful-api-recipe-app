const path = require('path');
const express = require('express');
const methodOverride = require('method-override');

// Routes
const recipesRoute = require('./routes/recipes.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// recipes routes
app.use('/api/recipes', recipesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));