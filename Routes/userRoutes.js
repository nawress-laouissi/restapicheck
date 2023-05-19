const express= require('express')
//importing our model
const User = require('../models/User')
const router= express.Router()
router.get('/test', async(req,res)=>{
res.send('this is a test')
})
//       GET :  RETURN ALL USERS 
router.get('/allUsers', async(req, res)=>{
    try {
       const users =  await User.find() 
       res.status(200).send({msg: 'all users', users})
    } catch (error) {
        res.status(500).send(error.message)
    } })
   

//    POST :  ADD A NEW USER TO THE DATABASE 
router.post('/newUser', async(req, res)=>{
        const {name, age, email}= req.body
        try {
           const user = new User({name, age, email})
           user.save() 
           res.status(201).send({msg: "new user has been created", user})
        } catch (error) {
           res.status(500).send(error.message)
        }
    })
    //      PUT : EDIT A USER BY ID  
     router.put('/updateUser/:id', async(req, res)=>{
        const {id}= req.params
        try {
           const userUpdated= await User.findByIdAndUpdate(id, {$set:{...req.body}}, 
            {new: true}) 
         res.status(200).send({msg: "user updated successfully", userUpdated})
        } catch (error) {
            res.status(500).send(error.message)
        }
     } )
     //  DELETE : REMOVE A USER BY ID 
     router.delete('/deletUser/:id', async(req,res)=>{
        const {id}= req.params
        try {
            await  User.findByIdAndDelete(id)
            res.status(200).send('user deleted')
        } catch (error) {
            res.status(500).send(error.message) 
        }
     })
   
module.exports= router
