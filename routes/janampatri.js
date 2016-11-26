/**
 * Created by Tan$ on 11/26/2016.
 */
exports.storeCustomer=function handlePostRequest(req,res){
    var customerName=req.body.customer_name;
    var customerEmail=req.body.customer_email;
    var customerMobile=req.body.customer_phone;
    var customerMessage=req.body.customer_message;

    console.log(customerName);
    console.log(customerEmail);
    console.log(customerMobile);
    console.log(customerMessage);


}