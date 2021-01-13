const express = require('express');
const router = express.Router();

const recipeController = require('../controller/recipe.controller');

// INDEX
router.get('/', recipeController.getAllRecipes);

// NEW
router.get('/new', recipeController.addNewRecipe);

// CREATE
router.post('/', recipeController.createRecipe);

// SHOW
router.get('/:id', recipeController.showOneRecipe);

// EDIT
router.get('/:id/edit', recipeController.editRecipe);

// UPDATE
router.patch('/:id', recipeController.updateRecipe);

// DELETE
router.delete('/:id', recipeController.deleteRecipe);


module.exports = router;