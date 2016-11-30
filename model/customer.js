/**
 * Created by Tan$ on 11/30/2016.
 */
var mongoose=require("mongoose");

var db=mongoose.connect('mongodb://127.0.0.1:27017/test');

var customerSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    message:String,
    timestamp:Date
});

module.exports=db.model('customer',customerSchema);