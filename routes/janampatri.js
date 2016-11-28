/**
 * Created by Tan$ on 11/26/2016.
 */
exports.storeCustomer=function handlePostRequest(req,res){
    var customerName=req.body.name;
    var customerEmail=req.body.email;
    var customerMobile=req.body.phone;
    var customerMessage=req.body.message;

    console.log(customerName);
    console.log(customerEmail);
    console.log(customerMobile);
    console.log(customerMessage);


}