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
        console.log(`Email sent to ${studentEmail}.`);
    })
    .catch((error) => {
        console.error(error);
    })
}

exports.sendEmailToInstructor = (instEmail, studentName, instName, 
                                 date, timeslot, zoomLink) => {
    const source = fs.readFileSync(path.resolve(__dirname, 
                   '../emails/newAppt-Instructor.mjml'), 'utf-8');              
    const template = compile(source);
    const mjml = template({
        studentName,
        instName,
        date,
        timeslot,
        zoomLink
    });

    sgMail.send({
        to: instEmail, 
        from: process.env.EMAIL_SENDER, 
        subject: `You have an appointment with ${studentName}`,
        text: `Hey ${instName}, you have a new booking! ${
        studentName} wants to attend your office hours on ${
        date} for your ${timeslot} time slot. Be sure to be there!`,
        html: mjml2html(mjml).html
    })
    .then(() => {
        console.log(`Email sent to ${instEmail}.`);
    })
    .catch((error) => {
        console.error(error);
    })
}
