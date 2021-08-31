import '../dotenv.config';
import fs from 'fs';
import path from 'path';
import { compile } from 'handlebars';
import mjml2html from 'mjml';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendEmailToStudent = (
    studentEmail: string, 
    instructorName: string, 
    date: string, 
    timeslot: string, 
    zoomLink: string
) => {
    const source = fs.readFileSync(path.resolve(__dirname, '../email-templates/new-appt-student.mjml'), 'utf-8');              
    const template = compile(source);
    const mjml = template({
        instructorName,
        date,
        timeslot,
        zoomLink
    });

    sgMail.send({
        to: studentEmail, 
        from: process.env.EMAIL_SENDER!, 
        subject: `You have an appointment with ${instructorName}`,
        text: `You will be meeting ${instructorName} on ${date} during their ${
        timeslot} time slot. Be sure to be there!`,
        html: mjml2html(mjml).html
    })
    .then(() => {
        console.log(`Email sent to ${studentEmail}.`);
    })
    .catch((error) => {
        console.error(error);
    });
}

export const sendEmailToInstructor = (
    instructorEmail: string, 
    studentEmail: string, 
    instructorName: string, 
    date: string, 
    timeslot: string, 
    zoomLink: string
) => {
    const source = fs.readFileSync(path.resolve(__dirname, '../email-templates/new-appt-instructor.mjml'), 'utf-8');              
    const template = compile(source);
    const mjml = template({
        studentEmail,
        instructorName,
        date,
        timeslot,
        zoomLink
    });

    sgMail.send({
        to: instructorEmail, 
        from: process.env.EMAIL_SENDER!, 
        subject: `You have an appointment with ${studentEmail}`,
        text: `Hey ${instructorName}, you have a new booking! ${
        studentEmail} wants to attend your office hours on ${
        date} for your ${timeslot} time slot. Be sure to be there!`,
        html: mjml2html(mjml).html
    })
    .then(() => {
        console.log(`Email sent to ${instructorEmail}.`);
    })
    .catch((error) => {
        console.error(error);
    });
}
