import { Card } from '../../components/Card';

import { useCourse } from '../../hooks/course';
import {
    CoursesContainer,
    CoursesPeriodContainer,
    EmptyMessage,
} from './styles';

interface CoursesTableProps {}

const PERIODS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function CoursesTable({}: CoursesTableProps) {
    const { courses, handleSetActiveCourse, activeCourse, setIsSidebarOpen } =
        useCourse();

    return (
        <CoursesContainer>
            {courses.length ? (
                PERIODS.map((period) => {
                    if (!courses.some((course) => course.period === period)) {
                        return;
                    }

                    return (
                        <CoursesPeriodContainer key={period}>
                            <span className="period-label">
                                {`${period}° período`}
                            </span>
                            {courses.map((course) => {
                                if (course.period !== period) return null;
                                const isUnlocked =
                                    course.prerequisites.includes(
                                        activeCourse.code,
                                    );
                                const isPrerequisite =
                                    activeCourse.prerequisites?.includes(
                                        course.code,
                                    );
                                const isActive =
                                    activeCourse.code === course.code;
                                const isDisabled =
                                    !isUnlocked && !isActive && !isPrerequisite;
                                return (
                                    <Card
                                        isPrerequisite={isPrerequisite}
                                        isUnlocked={isUnlocked}
                                        isActive={
                                            activeCourse.code === course.code
                                        }
                                        isDisabled={
                                            activeCourse?.code && isDisabled
                                        }
                                        onClick={() =>
                                            handleSetActiveCourse(course)
                                        }
                                        onDoubleClick={() =>
                                            setIsSidebarOpen(true)
                                        }
                                        course={course}
                                    />
                                );
                            })}
                        </CoursesPeriodContainer>
                    );
                })
            ) : (
                <EmptyMessage>
                    Nenhuma disciplina correspondente {':('}
                </EmptyMessage>
            )}
        </CoursesContainer>
    );
}
