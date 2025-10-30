import mongoose from "mongoose";

export const recipeSchema = mongoose.Schema({
   title: {
     type: String,
     required: true
   },
  ingredients: {
     type: Array,
     required: true
   },
  instructions: {
     type: String,
     required: true
   },
  time: {
     type: String,
   },
})

export const Recipes = mongoose.model('recipe', recipeSchema)
