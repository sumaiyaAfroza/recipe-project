import express from "express";

export const router = express.Router()

router.post('/signUp', userSignUp)
router.post('/login', userLogin)
router.get('/user/:id' , getUser)