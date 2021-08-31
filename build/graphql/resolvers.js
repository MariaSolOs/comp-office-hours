"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const mongoose_1 = require("mongoose");
const apollo_server_express_1 = require("apollo-server-express");
const instructor_1 = __importDefault(require("../mongodb-models/instructor"));
const appointment_1 = __importDefault(require("../mongodb-models/appointment"));
const data_mappers_1 = require("../utils/data-mappers");
const email_1 = require("../utils/email");
const server_types_1 = require("../server-types");
exports.resolvers = {
    Appointment: {
        instructor: ({ instructor }) => instructor_1.default.findById(instructor).lean(server_types_1.LEAN_DEFAULTS).then(data_mappers_1.instructorMapper)
    },
    Query: {
        instructors: () => __awaiter(void 0, void 0, void 0, function* () {
            const instructors = yield instructor_1.default.find({}).lean(server_types_1.LEAN_DEFAULTS);
            return instructors.map(data_mappers_1.instructorMapper);
        }),
        appointments: (_, { instId }) => __awaiter(void 0, void 0, void 0, function* () {
            const appts = yield appointment_1.default.find({
                instructor: mongoose_1.Types.ObjectId(instId)
            }).lean(server_types_1.LEAN_DEFAULTS);
            return appts.map(data_mappers_1.appointmentMapper);
        })
    },
    Mutation: {
        bookAppointment: (_, { apptId }, { userEmail }) => __awaiter(void 0, void 0, void 0, function* () {
            const appt = yield appointment_1.default.findOneAndUpdate({ _id: mongoose_1.Types.ObjectId(apptId), isBooked: false }, { isBooked: true }).lean(server_types_1.LEAN_DEFAULTS);
            if (!appt) {
                throw new apollo_server_express_1.ApolloError('Appointment not found.');
            }
            const instructor = yield instructor_1.default.findById(appt.instructor).lean(server_types_1.LEAN_DEFAULTS);
            if (!instructor) {
                throw new apollo_server_express_1.ApolloError('Instructor not found.');
            }
            (0, email_1.sendEmailToStudent)(userEmail, instructor.name, appt.date, appt.timeslot, instructor.zoomLink);
            (0, email_1.sendEmailToInstructor)(instructor.email, userEmail, instructor.name, appt.date, appt.timeslot, instructor.zoomLink);
            return (0, data_mappers_1.appointmentMapper)(appt);
        })
    }
};
