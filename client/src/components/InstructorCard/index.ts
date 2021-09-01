import InstructorCard from './InstructorCard';

import type { Instructor } from 'models';

export type InstructorCardProps = {
    inst: Instructor;
    isSelected: boolean;
    onSelected?: () => void;
}

export type InstructorCardStyleProps = {
    isSelected: boolean;
}

export default InstructorCard;