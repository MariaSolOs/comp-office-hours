import type React from 'react';

import type { Instructor } from 'models';

import InstructorList from './InstructorList';

export type InstructorListProps = {
    instructors: Instructor[];
    selectedInstructor?: Instructor;
    useAnyInstructor: boolean;
    onInstructorChange: (inst: Instructor) => void;
    onToggleAnyInstructor: React.ChangeEventHandler<HTMLInputElement>;
}

export default InstructorList;