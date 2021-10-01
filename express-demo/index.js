const path = require('path')
const express = require("express")
const { application } = require('express')
const memberRoutes = require('./routes/api/members')

// express has access to request,middleware and response object 
const app = express()

// static pages 
// response headers are set automatically by express based on req.url
app.use(express.static(path.join(__dirname, 'public')))

const logger=(req,res,next)=>{
    console.log('Endpoint called is:',req.url);
    next()
}
// middleware for all requests
app.use(logger)
app.use(express.json())

// all member endpoints in separate files
app.use('/api/members',memberRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})

