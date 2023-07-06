import { ICourse } from '../../@types/ICourse';
import { CardContainer } from './styles';

interface CardProps {
    course: ICourse;
}

export function Card({ course }: CardProps) {
    const { label, type } = course;

    return (
        <CardContainer type={type}>
            <span>{label}</span>
        </CardContainer>
    );
}
