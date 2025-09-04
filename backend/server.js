const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express()
app.use(cors());
app.use(express.json());



mongoose.connect("mongodb://localhost:27017/Shopping");
const ProductSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String
});
const Product=mongoose.model('products',ProductSchema);


app.post("/api/addproducts", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});





app.get("/api/products",async (req,res)=>{
    try{
        const products=await Product.find();
        res.json(products);
    }catch(err){
        console.log(err);
    }
    
});

/*  for seeding data
app.get("/api/seed", async (req, res) => {
  await Product.insertMany([
    {
       name: "Wireless Headphones",
    price: 59.99,
    image: "data:image/jpeg;base64,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" // existing base64
  },
  {
       name: "Smart Watch",
    price: 129.99,
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/smartwatch/k/r/8/49-smart-watch-t-800-orange-androatyam-traders-yes-original-imagvht9cwnpwsgw.jpeg?q=90&crop=false"
  },
  {
       name: "Gaming Mouse",
    price: 39.99,
    image: "https://images.meesho.com/images/products/471329513/hqjr2_512.jpg"
  },
  {
       name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://images-cdn.ubuy.co.in/63400c68afe02d2b0c7aeb85-mechanical-gaming-keyboard-87-keys-small.jpg"
  },
  {
       name: "Bluetooth Speaker",
    price: 45.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafv8tjFT80Qwx7TMFHc0bGpgTSyqZylR95ryOl3myoY-3dHlqb0hPRfYsOu1aNXFUQiE&usqp=CAU"
  },
  {
       name: "Laptop Stand",
    price: 29.99,
    image: "https://alogic.in/cdn/shop/files/Alogic_Elite_Power_Laptop_Stand_With_Wireless_Charger_Black_1.webp?v=1719555163&w0"
  },
  {
       name: "4K Monitor",
    price: 299.99,
    image: "https://m.media-amazon.com/images/I/81riI7eU9dL._AC_SL1500_.jpg"
  },
  {
       name: "External Hard Drive",
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/81OdwZ9cqOL._AC_SL1500_.jpg"
  },
  {
       name: "Smartphone Tripod",
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/71VZu3NdL2L._AC_SL1500_.jpg"
  },
  {
        name: "Noise Cancelling Earbuds",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/61JtV8sYf-L._AC_SL1500_.jpg"
  },
  {
        name: "Portable Power Bank",
    price: 35.5,
    image: "https://m.media-amazon.com/images/I/71N5qKvwUHL._AC_SL1500_.jpg"
  },
  {
        name: "Wireless Charger",
    price: 22.99,
    image: "https://m.media-amazon.com/images/I/71f8e6kQ8hL._AC_SL1500_.jpg"
  }]);
  res.send("Database seeded!");
});*/

app.listen(9102,()=>{
    console.log("Server at 9102");
})
