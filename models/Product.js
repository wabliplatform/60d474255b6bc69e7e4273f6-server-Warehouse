
const { ProductPimageSchema } =require('./ProductPimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
Underscoreid:String , 


ptitle:String , 


pquantity:Number , 


pimage:  
ProductPimageSchema
 



})

module.exports = {
  Product : mongoose.model('product', productSchema),
}

