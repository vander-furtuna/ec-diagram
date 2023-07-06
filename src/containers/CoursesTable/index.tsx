import { Card } from '../../components/Card';
import { COURSES } from '../../data/courses';
import { CoursesContainer, CoursesPeriodContainer } from './styles';

interface CoursesTableProps {}

const PERIODS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function CoursesTable({}: CoursesTableProps) {
    return (
        <CoursesContainer>
            {PERIODS.map((period) => (
                <CoursesPeriodContainer key={period}>
                    {COURSES.map((course) => {
                        if (course.period !== period) return null;
                        return <Card course={course} />;
                    })}
                </CoursesPeriodContainer>
            ))}
        </CoursesContainer>
    );
}
