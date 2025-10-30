import {Recipes} from "../models/recipe.js";

export const addRecipe = async (req, res) => {
  try{
    const {title, instructions, ingredients,time} = req.body
    const newRecipe = await Recipes.create({
      title,ingredients,instructions, time
    })
    res.json({
      data: newRecipe,
      message: 'recipe created'
    })
  }
  catch (err) {
    console.log(err)

  }
}

export const getRecipes = async (req, res) => {
  try{
    const allRecipes = await Recipes.find()
    res.json({
      data: allRecipes,
      message: 'recipes fetch'
    })
  }
  catch (err) {
    console.log(err)
  }
}

export const getRecipe = async (req, res) => {
  try{
    const Recipe = await Recipes.findById(req.params.id)
    res.json({
      data: Recipe,
      message: 'recipe fetch'
    })
  }
  catch (err) {
    console.log(err)
  }
}

export const editRecipe = async (req, res) => {
  try{
    const {id} = req.params
    const updateRecipe = await Recipes.findByIdAndUpdate(
     id,
      {$set : req.body},
      {new: true, runValidators: true}
    )
    res.json({
      data: updateRecipe,
      message: 'updated recipe'
    })
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteRecipe = async (req, res) => {
  try{
    const {id} = req.params
    const deletedRecipe = await Recipes.findByIdAndDelete(id)
    res.json({
      data: deletedRecipe,
      message: 'delete recipe'
    })
  }
  catch (err) {
    console.log(err)
  }
}