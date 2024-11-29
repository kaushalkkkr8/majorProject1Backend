const mongo = require("mongoose");

const addressSchema = new mongo.Schema(
  {
    name:{
      type:String
    },
    address1:{
      type:String
    },
    city:{
      type:String
    },
    state:{
      type:String
    },
    pincode:{
      type:String
    },
  },
  { timestamps: true }
);
const Address = mongo.model("address", addressSchema);
module.exports = Address;
