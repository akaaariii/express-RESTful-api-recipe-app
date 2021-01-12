const path = require('path');
const express = require('express');
const {v4:uuid} = require('uuid');
const methodOverride = require('method-override');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fake database
let recipes = [
  {
    id: uuid(),
    image_url: "https://cdn.pixabay.com/photo/2020/03/26/05/04/meatball-4969274_1280.jpg",
    name: "Spagetti Meatballs",
  },
  {
    id: uuid(),
    image_url: "https://cdn.pixabay.com/photo/2019/08/15/09/00/pilaf-4407499_1280.jpg",
    name: "Lamb Pilaf",
  },
  {
    id: uuid(),
    image_url: "https://cdn.pixabay.com/photo/2020/05/04/21/20/creme-caramel-5130830_1280.jpg",
    name: "Custard Pudding",
  },
  {
    id: uuid(),
    image_url: "https://images.unsplash.com/photo-1565280654386-36c3ea205191?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    name: "Chicken Curry",
  },
];

// INDEX
app.get('/api/recipes', (req, res) => {
  res.render('index', { recipes });
});

// NEW
app.get('/api/recipes/new', (req, res) => {
  res.render('new');
});

// CREATE
app.post('/api/recipes', (req, res) => {
  const { image_url, name } = req.body;
  recipes.push({
    id: uuid(),
    image_url,
    name
  });
  res.redirect('/api/recipes');
});

// SHOW
app.get('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find(r => r.id === id);
  res.render('show', { recipe });
});

// EDIT
app.get('/api/recipes/:id/edit', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find(r => r.id === id);
  res.render('edit', { recipe });
});

// UPDATE
app.patch('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  const foundRecipe = recipes.find(r => r.id === id);

  const newRecipeName = req.body.name;
  const newRecipeUrl = req.body.image_url;
  foundRecipe.name = newRecipeName;
  foundRecipe.image_url = newRecipeUrl;

  res.redirect(`/api/recipes/${id}`);
});

// DELETE
app.delete('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  recipes = recipes.filter(r => r.id !== id);
  res.redirect('/api/recipes');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));