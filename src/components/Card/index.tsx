import { CourseType } from '../../@types/ICourse';
import { CardContainer } from './styles';

interface CardProps {
    label: string;
    type: CourseType[];
}

export function Card({ label, type }: CardProps) {
    return (
        <CardContainer>
            <span>{label}</span>
        </CardContainer>
    );
}
