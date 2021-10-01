const express = require('express')
const members = require('../../public/demo.json')

const router = express.Router()
router.get('/', (req, res) => {
    res.json(members)
})

// middleware for GET members only
const checkMember = (req,res,next)=>{
let index = -1;
const found = members.some((member,index) => {
        index=index
        return member.name === req.params.name
    })

    req.index=index-1
    req.found=found
    next()
}

// GET
router.get('/:name',checkMember, (req, res) => {
    if (req.found) {
        res.statusCode=200
        res.json(members.filter(member => member.name === req.params.name))
    }
    else {
        res.statusCode=400
        res.json({ msg: `No member with name ${req.params.name}` })
    }
})

// POST
router.post('/',(req,res)=>{
    const newMember = {
        "name" : req.body.name,
        "age" : req.body.age
    }
    members.push(newMember)
    res.send(members)
})

// PUT
router.put('/:name',checkMember,(req,res)=>{
    if(req.found)
    {
        const updatedMember = {
            "name":req.body.name,
            "age" : req.body.age
        }
        members.splice(req.index,1,updatedMember)
        res.statusCode=200
        res.json(members)
    }
    else {
        res.statusCode=400
        res.json({ msg: `No member with name ${req.params.name}` })
    }
})

module.exports=router