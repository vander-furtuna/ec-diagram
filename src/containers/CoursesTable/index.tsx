import { COURSES } from '../../data/courses';
import { CoursesContainer } from './styles';

interface CoursesTableProps {}

const PERIODS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function CoursesTable({}: CoursesTableProps) {
    return (
        <CoursesContainer>
            {PERIODS.map((period) => (
                <CoursesContainer key={period}>
                    {COURSES.map((course) => (
                        <Card />
                    ))}
                </CoursesContainer>
            ))}
        </CoursesContainer>
    );
}
