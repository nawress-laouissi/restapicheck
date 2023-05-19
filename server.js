const express= require('express')
const connectDb = require('./connection/connectionDb')


const app= express()
//coonect the db:
connectDb()
// routes: 
app.use(express.json())
app.use('/api/user', require('./Routes/userRoutes'))
// router.post('/newUser', async(req, res)=>{
//     const {name, age, email}= req.body
//     try {
//        const user = new User({name, age, email})
//        user.save() 
//        res.status(201).send({msg: "new user has been created", user})
//     } catch (error) {
//        console.log('server error') 
//     }
// })
const port= 5600
app.listen(port, ()=>{
    console.log(`server successfully running on port : ${port}`)
})