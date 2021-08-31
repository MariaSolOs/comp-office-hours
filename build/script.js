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
const appointment_1 = __importDefault(require("./mongodb-models/appointment"));
const instructors = [
    {
        _id: '612e87e43288ed6d80b86d32',
        dates: [
            '2021-09-07',
            '2021-09-14',
            '2021-09-21',
            '2021-09-28',
            '2021-10-05',
            '2021-10-12',
            '2021-10-19',
            '2021-10-26',
            '2021-11-02',
            '2021-11-09',
            '2021-11-16',
            '2021-11-23',
            '2021-11-30',
            '2021-12-07',
            '2021-12-14'
        ],
        slots: [
            '14:30-14:50',
            '14:50-15:10',
            '15:10-15:30'
        ]
    },
    {
        _id: '612e88723288ed6d80b86d33',
        dates: [
            '2021-09-06',
            '2021-09-13',
            '2021-09-20',
            '2021-09-27',
            '2021-10-04',
            '2021-10-11',
            '2021-10-18',
            '2021-10-25',
            '2021-11-01',
            '2021-11-08',
            '2021-11-15',
            '2021-11-22',
            '2021-11-29',
            '2021-12-06',
            '2021-12-13'
        ],
        slots: [
            '16:30-16:50',
            '16:50-17:10',
            '17:10-17:30',
            '17:30-17:45',
            '17:45-18:00',
        ]
    },
    {
        _id: '612e88723288ed6d80b86d33',
        dates: [
            '2021-09-07',
            '2021-09-14',
            '2021-09-21',
            '2021-09-28',
            '2021-10-05',
            '2021-10-12',
            '2021-10-19',
            '2021-10-26',
            '2021-11-02',
            '2021-11-09',
            '2021-11-16',
            '2021-11-23',
            '2021-11-30',
            '2021-12-07',
            '2021-12-14'
        ],
        slots: [
            '12:00-12:20',
            '12:20-12:40',
            '12:40-13:00',
            '13:00-13:20',
            '13:20-13:40',
            '13:40-14:00'
        ]
    },
    {
        _id: '612e88b53288ed6d80b86d34',
        dates: [
            '2021-09-08',
            '2021-09-15',
            '2021-09-22',
            '2021-09-29',
            '2021-10-06',
            '2021-10-13',
            '2021-10-20',
            '2021-10-27',
            '2021-11-03',
            '2021-11-10',
            '2021-11-17',
            '2021-11-24',
            '2021-12-01',
            '2021-12-08',
            '2021-12-15'
        ],
        slots: [
            '08:00-08:20',
            '08:20-08:40',
            '08:40-09:00',
            '09:00-09:20',
            '09:20-09:40',
            '09:40-10:00',
            '10:20-10:20',
            '10:20-10:40',
            '10:40-11:00',
            '11:00-11:15',
            '11:15-11:30'
        ]
    }
];
const script = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const inst of instructors) {
        for (const date of inst.dates) {
            for (const timeslot of inst.slots) {
                yield appointment_1.default.create({
                    instructor: inst._id,
                    date,
                    timeslot,
                    isBooked: false
                });
            }
        }
    }
    console.log('DONE!');
});
exports.default = script;
