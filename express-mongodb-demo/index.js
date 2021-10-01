require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts')

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use('/posts',postRoutes)

const mongodbURL = process.env.MOGODB_URL
mongoose.connect(mongodbURL,()=>{
    console.log(`Connected to Mongodb Atlas`);
})

app.get('/',(req,res)=>{
    res.send('Express App working')
})

const PORT = process.env.PORT | 5050
app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
})