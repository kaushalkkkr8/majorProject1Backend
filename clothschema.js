const mongo = require('mongoose')

const eComSchema = new mongo.Schema({
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
    description:{
        type: String
    },
    rating: {
        type: String
    },
    wishlist:{
        type :Boolean
    }
}, { timestamps: true })
const ECommerce = mongo.model("eCommerce", eComSchema)
module.exports = ECommerce