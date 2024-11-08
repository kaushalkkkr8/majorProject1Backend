const mongo = require('mongoose')


const cartSchema = new mongo.Schema({
    image: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    name: {
        type: String
    },
    rating: {
        type: String
    },
    size:{
        type: String
    },
   
    wishlist:{
        type :Boolean
    },
    
}, { timestamps: true })
const Cart = mongo.model("cart", cartSchema)
module.exports = Cart

