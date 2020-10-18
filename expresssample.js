const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Hoşgeldin kullanıcı');
})

app.get('/product',(req,res)=>{
    res.send("Ürünler sayfasına hoşgeldin!");
})

app.get('/product/:id',(req,res)=>{
    const gelenid = req.params.id;
    res.send("Ürünlerin detay sayfasına hoşgeldin! " + gelenid);
})

var kisi = {
    "ad":"çağatay",
    "soyad":"yıldız"
}

app.get("/person",(req,res)=>{
    res.json(kisi);
})

app.get("/document",(req,res)=>{
    res.sendFile(__dirname + "/img/freddy.jpg");
})

app.get('/mainpage',(req,res)=>{
    res.sendFile(__dirname + "/htmlfiles/index.html");
})

//txt, json, image formatları, sabit htmller, file lar,xml


app.listen(3000)