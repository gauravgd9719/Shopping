const express = require("express")
const multer = require("multer")
const mongoose = require("mongoose")
const app = express()
const route = require("./routes/route")
app.use(express.json())
app.use(multer().any())

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://gauravdhiman123:hiFunctionUp@gd-cluster.kufg7lx.mongodb.net/Product_Management", { useNewUrlParser: true })
 .then(()=> console.log("MongoDb connected"))
 .catch((error)=>console.log(error))

 app.use('/',route)

 app.use(function(req,res){
    res.status(404).send({status:false,message:"incorrect url"})
})


 app.listen(3000,function(){
    console.log("express running on port 3000")
 })
