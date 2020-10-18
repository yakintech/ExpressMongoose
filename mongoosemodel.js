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

const guid = mongoose.Types.ObjectId();

console.log(guid);




product.findByIdAndRemove("5f8af7823b72f83f48166d77",(err,doc)=>{
    console.log(err);
})


// for (let i = 0; i < 10000; i++) {
//     var urun = new product();
//     // urun._id = guid;
//     urun.name = "ŞAOMİ";
//     urun.price = 2300;
//     urun.category = { name: 'Elektronik', description: 'elektronik ürünler' }
//     urun.images = [
//         {
//             name: "ilkfoto",
//             path: "ilkfoto.jpg"
//         },
//         {
//             name: "ikincifoto",
//             path: "ikincifoto.jpg"
//         }
//     ]
    
//     urun.save((err, doc) => {
//         console.log("success!!");
//     });
    
// }




