const express = require('express')
const router = express.Router()
const Post = require('../models/postModel')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    }
    catch (err) {
        res.json({ message: err.message ? err.message : err })
    }
})

// creating new record
router.post('/', async (req, res) => {
    try {
        let post = new Post(req.body)
        await post.save()
        res.json({ msg: 'Added Post', post })
    }
    catch (err) {
        res.json({ message: err.message ? err.message : err })
    }

})

// update record partially
router.patch('/', async (req, res) => {
    try {
        const updatedPost = await Post.findOneAndUpdate({ title: req.query.title },req.body)
        res.json({ msg: 'Updated Post', post: updatedPost })
    }
    catch (err) {
        res.json({ message: err.message ? err.message : err })
    }
})

// complete replacement of existing record
// creates new record if it doesnt exist
router.put('/:id',async (req,res)=>{
    try {
        const post = new Post(req.body);
        const updatedPost = await Post.findOneAndUpdate({ _id: req.params.id },post)
        if(updatedPost == null)
        {
            await post.save()
        }
        res.json({ msg: 'Updated/Added Post', post })
    }
    catch (err) {
        res.json({ message: err.message ? err.message : err })
    }
})

//URI PARAMETER  : router.delete('/:title',async (req,res)=>{
// http://localhost:5050/posts/First%20Post
// req.params.title
// OR
// QUERY PARAMETER : http://localhost:5050/posts?title=First%20Post 
router.delete('/', async (req, res) => {

    try {
        const deletedPost = await Post.findOneAndDelete({ title: req.query.title })
        res.json({ msg: 'Deleted Post', post: deletedPost })
    }
    catch (err) {
        res.json({ message: err.message ? err.message : err })
    }

})

module.exports = router