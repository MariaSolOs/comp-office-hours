"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_lean_defaults_1 = __importDefault(require("mongoose-lean-defaults"));
const appointmentSchemaFields = {
    instructor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    },
    date: {
        type: String,
        required: true
    },
    timeslot: {
        type: String,
        required: true
    },
    isBooked: {
        type: Boolean,
        required: true
    }
};
const appointmentSchema = new mongoose_1.Schema(appointmentSchemaFields);
appointmentSchema.plugin(mongoose_lean_defaults_1.default);
exports.default = (0, mongoose_1.model)('Appointment', appointmentSchema);
