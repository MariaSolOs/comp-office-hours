"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_lean_defaults_1 = __importDefault(require("mongoose-lean-defaults"));
const instructorSchemaFields = {
    name: {
        type: String,
        required: true
    },
    zoomLink: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /(@mail\.mcgill\.ca|@mcgill.ca)$/
    },
    photo: {
        type: String,
        default: 'https://res.cloudinary.com/dxod7etqu/image/upload/c_scale,q_70,w_100/v1608409362/COMP202-OHBA/no-pic-user.jpg'
    }
};
const instructorSchema = new mongoose_1.Schema(instructorSchemaFields);
instructorSchema.plugin(mongoose_lean_defaults_1.default);
exports.default = (0, mongoose_1.model)('Instructor', instructorSchema);
