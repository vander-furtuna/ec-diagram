import { Card } from '../../components/Card';

import { useCourse } from '../../hooks/course';
import { CoursesContainer, CoursesPeriodContainer } from './styles';

interface CoursesTableProps {}

const PERIODS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function CoursesTable({}: CoursesTableProps) {
  const { courses, handleSetActiveCourse, activeCourse } = useCourse();

  return (
    <CoursesContainer>
      {PERIODS.map((period) => (
        <CoursesPeriodContainer key={period}>
          {courses.map((course) => {
            if (course.period !== period) return null;
            const isUnlocked = course.prerequisites.includes(activeCourse.code);
            const isPrerequisite = activeCourse.prerequisites?.includes(
              course.code,
            );
            const isActive = activeCourse.code === course.code;
            const isDisabled = !isUnlocked && !isActive && !isPrerequisite;
            return (
              <Card
                isPrerequisite={isPrerequisite}
                isUnlocked={isUnlocked}
                isActive={activeCourse.code === course.code}
                isDisabled={isDisabled}
                onClick={() => handleSetActiveCourse(course)}
                course={course}
              />
            );
          })}
        </CoursesPeriodContainer>
      ))}
    </CoursesContainer>
  );
}
