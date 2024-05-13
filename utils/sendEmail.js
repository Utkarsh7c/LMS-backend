"use strict";
import nodemailer from 'nodemailer'

const sendEmail= async (email,subject,message)=>{
    let  transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        // secure: false, // true for 465 port and false for other ports
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });
      await transporter.sendMail({
        from:  process.env.SMTP_FROM_EMAIL, // sender address
        to:  email,
        subject: subject, // Subject line
       
        html:message , // html body
      });

}





 export default sendEmail;
