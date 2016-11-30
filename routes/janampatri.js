/**
 * Created by Tan$ on 11/26/2016.
 */

var Customer = require("../model/customer");
exports.storeCustomer = function storeCustomer(req, res) {
    var customerName = req.body.name;
    var customerEmail = req.body.email;
    var customerMobile = req.body.phone;
    var customerMessage = req.body.message;

    console.log(customerName);
    console.log(customerEmail);
    console.log(customerMobile);
    console.log(customerMessage);

    var customer = new Customer({
        name: customerName,
        email: customerEmail,
        mobile: customerMobile,
        message: customerMessage,
        timestamp: Date.now()
    });
    customer.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Customer Added!");
        }
    });

    
}