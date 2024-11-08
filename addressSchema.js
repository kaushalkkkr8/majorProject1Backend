const mongo = require("mongoose");

const addressSchema = new mongo.Schema(
  {
    address:{
      type:String
    }
  },
  { timestamps: true }
);
const Address = mongo.model("address", addressSchema);
module.exports = Address;
