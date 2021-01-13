const {v4:uuid} = require('uuid');
let recipes = require('../model/recipes.model');

exports.getAllRecipes = (req, res) => {
  res.render('index', { recipes });
};

exports.addNewRecipe = (req, res) => {
  res.render('new');
};

exports.createRecipe = (req, res) => {
  const { image_url, name } = req.body;
  recipes.push({
    id: uuid(),
    image_url,
    name
  });
  res.redirect('/api/recipes');
};

exports.showOneRecipe = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find(r => r.id === id);
  res.render('show', { recipe });
};

exports.editRecipe = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find(r => r.id === id);
  res.render('edit', { recipe });
};

exports.updateRecipe = (req, res) => {
  const { id } = req.params;
  const foundRecipe = recipes.find(r => r.id === id);

  const newRecipeName = req.body.name;
  const newRecipeUrl = req.body.image_url;
  foundRecipe.name = newRecipeName;
  foundRecipe.image_url = newRecipeUrl;

  res.redirect(`/api/recipes/${id}`);
};

exports.deleteRecipe = (req, res) => {
  const { id } = req.params;
  recipes = recipes.filter(r => r.id !== id);
  res.redirect('/api/recipes');
};