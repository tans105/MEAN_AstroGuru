/**
 * Created by Tan$ on 11/26/2016.
 */

var Customer = require("../model/customer");
var nodemailer=require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
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
            sendMailNotification();
        }
    });


    var sendMailNotification=function(){
        var transporter = nodemailer.createTransport(smtpTransport({
            service: 'yahoo',
            auth: {
                user: 'tanmayawasthi105@yahoo.com', // Your email id
                pass: '#Jun105#' // Your password
            }
        }));
        var mailOptions = {
            from: '"AstroGuru" <tanmayawasthi105@yahoo.com>', // sender address
            to: 'tanmayawasthi105@yahoo.com', // list of receivers
            subject: 'New Janampatri!!', // Subject line
            // text: 'Hello world 🐴', // plaintext body
            html: '<b>'+customerMessage+'</b>' // html body
        };


        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);

            }
            console.log('Message sent: ' + info.response);
            res.send("Customer Added and Mail Sent!");
        });

    }

}