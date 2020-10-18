const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user_cagatay:ai2GFv4N8Hwfq5sO@cluster0.ol2mp.mongodb.net/bilgeticaret?authSource=admin&replicaSet=atlas-75f4ea-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true })

const Schema = mongoose.Schema;

//veritabanı üzerindeki bir tablonun (dökümanın) şemasını yani özelliklerini oluşturdum
const productSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    isactive: Boolean,
    codes: [],
    adddate: { type: Date, default: Date.now },
    category: {
        name: String,
        description: String
    },
    images: [{
        name: String,
        path: String
    }]
});

const userSchema = new Schema({
    name: {type:String, required:true },
    surname: String,
    email: String,
    country:String,
    age:Number
})

const product = mongoose.model('productModel', productSchema);
const user = mongoose.model('userModel', userSchema);


app.get('/user',(req,res)=>{

    user.find({},(err,doc)=>{
        if(!err){
            res.json(doc);
        }
        else{
            res.json(err);
        }
    })
})


app.get('/user/:id',(req,res)=>{
    user.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.json(doc);
        }
        else{
            res.json(err);
        }
    })
})



app.listen(1925);