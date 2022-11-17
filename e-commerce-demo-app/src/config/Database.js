const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const mongoDB = require('mongodb');
const {ObjectId} = require('mongodb');

app.use(express.json())

app.use(cors({
    origin:"*"
}))

//for the db connection.
mongoose.connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, (error) => {
    if (!error) {
        console.log("connect to db");
    }
    else {
        console.log("Error");
    }
})

//Schema for product.

const schema = {
    image: String,
    title: String,
    description: String,
    price: String
}

//schema for customer.
const customerSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String}
});

//schema for cart items.
const cartItemsSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: String
})


const productModel = mongoose.model("products", schema);
const customerModel = mongoose.model("customers", customerSchema);
const cartItemModel = mongoose.model("cartitems", cartItemsSchema);


//whole product data.
app.get("/products",  async(req, res)=>{
    const products=await productModel.find({})
    if(products){
        res.send(products);
    }
})


//Get Data with particular id.

app.get("/products/:id", async (req, res) => {
    pID='635bac5f1a9aa808762d402b'
    // const product = await productModel.findById(pID);
    // console.log(product)
    // if(product)
    // {
    //     res.send(product);
    // }
    // else
    // {
    //     res.status(404).json({message:"Product not found"})
    // }

    productModel.findById(pID, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            res.send(docs);
        }
    });

})

//Post request for adding customer.

app.post("/addcustomer", async (req, res) => {

    const data = new customerModel({
        name: req.body.name,
        email: req.body.email,
    });

    const value = await data.save();
    res.json(value);
})

//get data for cart items.

app.get("/cartitems", async (req,res) => {
    cartItemModel.find(function (error, value) {
        if (error) {
            res.send("Error")
        }
        else {
            if (value.length == 0)//for empty
            {
                console.log("data does not exist");
            }
            else {
                res.send(value);
            }
        }
    })
})

//post method for adding cart item.
app.post("/addtocart", async (req, res) => {

    const data = new cartItemModel({
        image: req.body.Image,
        title: req.body.Title,
        description: req.body.Description,
        price: req.body.Price
    });

    const value = await data.save();
    res.json(value);
})

//delete product from cart.
app.delete("/cartitems/:id", async(req,res)=>{
    const data = cartItemModel;
    const value = await data.deleteOne({_id: new mongoDB.ObjectId(req.params.id)})
    res.send(value);
})

app.listen(4000, () => {
    console.log("on port 4000")
})