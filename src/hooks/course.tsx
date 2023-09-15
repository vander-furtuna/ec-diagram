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
    preRequisites: ICourse[];
    unlocked: ICourse[];
    handleSetActiveCourse: (course: ICourse) => void;
    handleSearch: (search: string) => void;
    resetActiveCourse: () => void;
}

interface ICourseProviderProps {
    children: ReactNode;
}

const CourseContext = createContext<ICourseContext>({} as ICourseContext);

export function CourseProvider({ children }: ICourseProviderProps) {
    const [courses, setCourses] = useState<ICourse[]>([] as ICourse[]);
    const [activeCourse, setActiveCourse] = useState<ICourse>({} as ICourse);
    const [preRequisites, setPreRequisites] = useState<ICourse[]>(
        [] as ICourse[],
    );
    const [unlocked, setUnlocked] = useState<ICourse[]>([] as ICourse[]);

    const handleSetActiveCourse = useCallback(
        (course: ICourse) => {
            setActiveCourse(course);

            const filteredPreRequisiteCourses = courses.filter(
                (initialCourse) => {
                    // console.log(
                    //     initialCourse.code,
                    //     course.name,
                    //     course.code,
                    //     course.prerequisites,
                    //     course.prerequisites.includes(initialCourse.code),
                    // );
                    return course.prerequisites.includes(initialCourse.code);
                },
            );

            const filteredUnlocked = courses.filter((initialCourse) => {
                console.log(
                    initialCourse.code,
                    course.name,
                    course.code,
                    course.prerequisites,
                    initialCourse.prerequisites.includes(course.code),
                );
                return initialCourse.prerequisites.includes(course.code);
            });

            setPreRequisites(filteredPreRequisiteCourses);
            setUnlocked(filteredUnlocked);
        },
        [setActiveCourse, activeCourse],
    );

    const handleSearch = useCallback((search: string) => {
        // console.log('search', search);
        setCourses(() => {
            const filteredCourses = COURSES.filter((course) => {
                return course.name.toLowerCase().includes(search.toLowerCase());
            });
            // console.log('filteredCourses', filteredCourses);
            return filteredCourses;
        });
    }, []);

    const resetActiveCourse = useCallback(() => {
        setActiveCourse({} as ICourse);
    }, []);

    const value = useMemo(
        () => ({
            activeCourse,
            courses,
            preRequisites,
            unlocked,
            handleSetActiveCourse,
            handleSearch,
            resetActiveCourse,
        }),
        [courses, activeCourse, handleSetActiveCourse, handleSearch],
    );

    useEffect(() => {
        setCourses(COURSES);
    }, []);

    return (
        <CourseContext.Provider value={value}>
            {children}
        </CourseContext.Provider>
    );
}

export function useCourse(): ICourseContext {
    const context = useContext(CourseContext);

    if (!context) {
        throw new Error('useCourse must be used within a AppProvider');
    }

    return context;
}
