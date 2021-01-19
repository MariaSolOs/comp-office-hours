enum DayOfWeek { Monday, Tuesday, Wednesday, Thursday, Friday }

export enum InstructorRole { INSTRUCTOR, TA, TEAM_MENTOR }

export type Instructor = {
    _id: string;
    name: string;
    photo: string;
    role: InstructorRole;
    languages: string[];
    availDays: Map<DayOfWeek, string>;
}