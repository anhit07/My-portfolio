'use strict';
const nodemailer = require('nodemailer');

module.exports.sendaMail = function(req, res){

    var senderName = req.body.senderName;
    var senderEmail = req.body.senderEmail;
    var subject =  req.body.subject;
    var message = req.body.message;
    var toAddress = "anhit07@gmail.com";

    var service = "gmail";
    var userServer = "home.carpenter2017@gmail.com";
    var pass = "carpenter17";
    
  
    if(senderEmail !== undefined && senderEmail !== ''){
        // Create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: service,
            auth: {
                user: userServer,
                pass: pass
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: senderName,
            to: toAddress, // list of receivers
            subject: subject + " <" + senderEmail + ">", // Subject line and sender address
            text: message // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res
                    .status(500)
                    .json(error);
            }
           res
            .status(200)//empty res
            .json('Message sent');
        });
    }

};
