"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructorMapper = exports.appointmentMapper = void 0;
const appointmentMapper = (appt) => ({
    _id: (appt === null || appt === void 0 ? void 0 : appt._id) || '',
    instructor: (appt === null || appt === void 0 ? void 0 : appt.instructor) || '',
    date: (appt === null || appt === void 0 ? void 0 : appt.date) || '',
    timeslot: (appt === null || appt === void 0 ? void 0 : appt.timeslot) || '',
    isBooked: (appt === null || appt === void 0 ? void 0 : appt.isBooked) || false
});
exports.appointmentMapper = appointmentMapper;
const instructorMapper = (inst) => ({
    _id: (inst === null || inst === void 0 ? void 0 : inst._id) || '',
    name: (inst === null || inst === void 0 ? void 0 : inst.name) || '',
    email: (inst === null || inst === void 0 ? void 0 : inst.email) || '',
    zoomLink: (inst === null || inst === void 0 ? void 0 : inst.zoomLink) || '',
    photo: (inst === null || inst === void 0 ? void 0 : inst.photo) || ''
});
exports.instructorMapper = instructorMapper;
