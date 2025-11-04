import 'module-alias/register.js'
import express from 'express'
import  dotenv from 'dotenv';
import {connectionDb} from "./config/connectionDb.js";
import {router as recipes} from "./routes/recipe.js";
import cors from 'cors'
import {router as users} from "./routes/user.js";

dotenv.config()

const app = express()
const port = process.env.PORT

connectionDb().then(() => console.log('connected'))
app.use(express.json())
app.use(cors())

app.use('/', users)
app.use('/recipe', recipes )


app.listen(port, () => {
  console.log(`${port}`)

})


// import 'module-alias/register'
//
// import express from 'express'
// import dotenv from 'dotenv'
//
//
// dotenv.config()
//
// const app = express()
// const port = process.env.PORT
//
// app.listen(port , () => {
//   console.log(`${port}`)
//
// })