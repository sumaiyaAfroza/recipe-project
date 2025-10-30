import express from "express";
import {addRecipe, deleteRecipe, editRecipe, getRecipe, getRecipes} from "../controllers/recipe.js";

export const router = express.Router()

router.post('/', addRecipe)
router.get('/', getRecipes)
router.get('/:id', getRecipe)
router.put('/:id', editRecipe)
router.delete('/:id', deleteRecipe)