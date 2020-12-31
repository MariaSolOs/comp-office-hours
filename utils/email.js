require('dotenv').config({ path: '../.env' });

const fs = require('fs'),
      path = require('path'),
      { compile } = require('handlebars'),
      mjml2html = require('mjml'),
      sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmailToStudent = (studentEmail, instName, date, timeslot, zoomLink) => {
    const source = fs.readFileSync(path.resolve(__dirname, 
                   '../emails/newAppt-Student.mjml'), 'utf-8');              
    const template = compile(source);
    const mjml = template({
        instName,
        date,
        timeslot,
        zoomLink
    });

    sgMail.send({
        to: studentEmail, 
        from: process.env.EMAIL_SENDER, 
        subject: `You have an appointment with ${instName}`,
        text: `You will be meeting ${instName} on ${date} during their ${
        timeslot} time slot. Be sure to be there!`,
        html: mjml2html(mjml).html
    })
    .then(() => {
        console.log('Email sent');
    })
    .catch((error) => {
        console.error(error);
    })
}
