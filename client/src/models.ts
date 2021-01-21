type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 
                 'Friday' | 'Saturday' | 'Sunday';

export enum InstructorRole { INSTRUCTOR, TA, TEAM_MENTOR }

export type Instructor = {
    _id: string;
    name: string;
    photo: string;
    role: InstructorRole;
    languages: string[];
    availDays: DayOfWeek[];
}

export type ConfirmationInfo = {
    instructor: Instructor;
    date: string;
    timeslot: string; 
    studentEmail: string;
}
