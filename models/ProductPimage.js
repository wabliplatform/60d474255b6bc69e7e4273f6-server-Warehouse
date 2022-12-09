
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductPimageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { ProductPimageSchema };

