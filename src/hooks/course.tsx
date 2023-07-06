import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ICourse } from '../@types/ICourse';
import { COURSES } from '../data/courses';

interface ICourseContext {
  activeCourse: ICourse;
  courses: ICourse[];
  handleSetActiveCourse: (course: ICourse) => void;
  handleSearch: (search: string) => void;
}

interface ICourseProviderProps {
  children: ReactNode;
}

const CourseContext = createContext<ICourseContext>({} as ICourseContext);

export function CourseProvider({ children }: ICourseProviderProps) {
  const [courses, setCourses] = useState<ICourse[]>([] as ICourse[]);
  const [activeCourse, setActiveCourse] = useState<ICourse>({} as ICourse);

  const handleSetActiveCourse = useCallback(
    (course: ICourse) => {
      setActiveCourse(course);
    },
    [setActiveCourse],
  );

  const handleSearch = useCallback((search: string) => {
    setCourses(() => {
      const filteredCourses = COURSES.filter((course) => {
        return course.name.toLowerCase().includes(search.toLowerCase());
      });

      return filteredCourses;
    });
  }, []);

  const value = useMemo(
    () => ({
      activeCourse,
      courses,
      handleSetActiveCourse,
      handleSearch,
    }),
    [courses, activeCourse, handleSetActiveCourse, handleSearch],
  );

  useEffect(() => {
    if (courses.length === 0) {
      setCourses(COURSES);
    }
  });

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}

export function useCourse(): ICourseContext {
  const context = useContext(CourseContext);

  if (!context) {
    throw new Error('useCourse must be used within a AppProvider');
  }

  return context;
}
