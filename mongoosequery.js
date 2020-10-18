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
    name: String,
    surname: String,
    email: String,
    country:String
})


const product = mongoose.model('productModel', productSchema);
const user = mongoose.model('userModel', userSchema);

//Insert, update, delete, list

//Insert

//insert işlemi

// var insertuser = new user();
// insertuser.name = "Çağatay";
// insertuser.surname = "Yılan";
// insertuser.email = "test@bilgeadam.com";
// insertuser.country = "Turkey";

// insertuser.save();
// insertuser.save((err,doc)=>{
//     if(!err){
//         //Hata yoksa eklenen dökümanı yazdırır.
//         console.log(doc);
//     }
//     else{
//         console.log(err);
//     }
// })

//update işlemi
// id ye göre veriyi bul ve güncelle
// user.findById("5f8c2eb957f3a60cb04c0fc3",(err,doc)=>{
//     if(!err){
//         doc.surname = "Ne zıkkımsa";
//         doc.save();
//     }
// })

//Name alanı Önder olan arkadaşın(TEK) soyadını "falan filan" yap

// user.findOne({name:'Önder'},(err,doc)=>{
//     if(!err){
//         doc.surname = "falan filan";
//         doc.save();
//     }
// })


//Name alanı Önder olan arkadaşın(TEK) soyadını "falan filan" yap

// user.find({name:"Önder"},(err,doc)=>{
//     if(!err){
//         doc[0].surname = "işte mişte";
//         doc[0].save();
//     }
// })

//save komutu yazmamıza gerek kalmadı
// user.findOneAndUpdate({name:"Önder"},{surname:"ne yazalım"},(err,doc)=>{
//     if(!err){
//         console.log("Success!");
//     }
// })

// user.findByIdAndUpdate("5f8c2eb957f3a60cb04c0fc3",{surname:"yakalayıp"},(err,doc)=>{
//     if(!err){
//         console.log("Success!")
//     }
// })

//Silme işlemi
//id ye göre sil
// user.findByIdAndDelete("5f8c2eb957f3a60cb04c0fc3",(err,doc)=>{
//     if(!err){
//         console.log("Success!");
//     }
// })

//herhangi bir kolona göre sil
// user.findOneAndDelete({name:"Çağatay"},(err,doc)=>{
//     if(!err){
//         console.log("Success");
//     }
// })

//toplu silme
// user.deleteMany({},(err,doc)=>{
//     if(!err){
//         console.log("Deleted!")
//     }
// })


//https://stackoverflow.com/questions/1863399/mongodb-is-it-possible-to-make-a-case-insensitive-query
//Ülkesi USA olan VE adı Önder olan user ları bul (ÖNDER,önder,ÖnDeR)
// user.find({country:'USA',name:/^önder$/i },(err,doc)=>{
//     if(!err){
//         console.log(doc)
//     }
// })








