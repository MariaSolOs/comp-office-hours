"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailToInstructor = exports.sendEmailToStudent = void 0;
require("../dotenv.config");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = require("handlebars");
const mjml_1 = __importDefault(require("mjml"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmailToStudent = (studentEmail, instructorName, date, timeslot, zoomLink) => {
    const source = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../email-templates/new-appt-student.mjml'), 'utf-8');
    const template = (0, handlebars_1.compile)(source);
    const mjml = template({
        instructorName,
        date,
        timeslot,
        zoomLink
    });
    mail_1.default.send({
        to: studentEmail,
        from: process.env.EMAIL_SENDER,
        subject: `You have an appointment with ${instructorName}`,
        text: `You will be meeting ${instructorName} on ${date} during their ${timeslot} time slot. Be sure to be there!`,
        html: (0, mjml_1.default)(mjml).html
    })
        .then(() => {
        console.log(`Email sent to ${studentEmail}.`);
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.sendEmailToStudent = sendEmailToStudent;
const sendEmailToInstructor = (instructorEmail, studentEmail, instructorName, date, timeslot, zoomLink) => {
    const source = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../email-templates/new-appt-instructor.mjml'), 'utf-8');
    const template = (0, handlebars_1.compile)(source);
    const mjml = template({
        studentEmail,
        instructorName,
        date,
        timeslot,
        zoomLink
    });
    mail_1.default.send({
        to: instructorEmail,
        from: process.env.EMAIL_SENDER,
        subject: `You have an appointment with ${studentEmail}`,
        text: `Hey ${instructorName}, you have a new booking! ${studentEmail} wants to attend your office hours on ${date} for your ${timeslot} time slot. Be sure to be there!`,
        html: (0, mjml_1.default)(mjml).html
    })
        .then(() => {
        console.log(`Email sent to ${instructorEmail}.`);
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.sendEmailToInstructor = sendEmailToInstructor;
