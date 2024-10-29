const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'stmp.gmail.com',
        port: 465,
        auth:{
            user:'',
            pass:'',
        }
    }
);

function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    });

    console.log("Email Sent");
}

sendMail()