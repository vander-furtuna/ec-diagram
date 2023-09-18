import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';

import {
    CourseType,
    DurationType,
    ICourse,
    PeriodType,
} from '../@types/ICourse';

import { COURSES } from '../data/courses';

interface ICourseContext {
    isSidebarOpen: boolean;
    activeCourse: ICourse;
    courses: ICourse[];
    filteredCourses: ICourse[];
    preRequisites: ICourse[];
    unlocked: ICourse[];
    selectFilterType: (type: CourseType | null) => void;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
    handleSetActiveCourse: (course: ICourse) => void;
    handleSearch: (search: string) => void;
    resetActiveCourse: () => void;
}

type FilterType = {
    search: string | null;
    type: CourseType | null;
    duration: DurationType | null;
    period: PeriodType | null;
};

interface ICourseProviderProps {
    children: ReactNode;
}

const CourseContext = createContext<ICourseContext>({} as ICourseContext);

export function CourseProvider({ children }: ICourseProviderProps) {
    const [filter, setFilter] = useState<FilterType>({
        search: null,
        type: null,
        duration: null,
        period: null,
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [courses, setCourses] = useState<ICourse[]>([] as ICourse[]);
    const [filteredCourses, setFilteredCourses] = useState<ICourse[]>(COURSES);
    const [activeCourse, setActiveCourse] = useState<ICourse>({} as ICourse);
    const [preRequisites, setPreRequisites] = useState<ICourse[]>(
        [] as ICourse[],
    );
    const [unlocked, setUnlocked] = useState<ICourse[]>([] as ICourse[]);

    const handleSetActiveCourse = useCallback(
        (course: ICourse) => {
            setActiveCourse(course);

            const filteredPreRequisiteCourses = COURSES.filter(
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

            const filteredUnlocked = COURSES.filter((initialCourse) => {
                return initialCourse.prerequisites.includes(course.code);
            });

            setPreRequisites(filteredPreRequisiteCourses);
            setUnlocked(filteredUnlocked);
        },
        [setActiveCourse, activeCourse],
    );

    const handleSearch = useCallback((search: string) => {
        setFilter((prev) => ({
            ...prev,
            search,
        }));
    }, []);

    const resetActiveCourse = useCallback(() => {
        setActiveCourse({} as ICourse);
    }, []);

    const selectFilterType = useCallback(
        (type: CourseType | null) => {
            setFilter((prev) => ({
                ...prev,
                type: type === null ? null : type,
            }));
        },
        [setFilter],
    );

    const applyFilters = useCallback(() => {
        let pivotFilteredCourses = COURSES.filter((course) => {
            if (
                filter.search !== null &&
                !course.name
                    .toLocaleLowerCase()
                    .includes(filter.search.toLocaleLowerCase())
            ) {
                return false;
            }

            return true;
        });
        pivotFilteredCourses = pivotFilteredCourses.filter((course) => {
            if (filter.type !== null && !course.type.includes(filter.type)) {
                return false;
            }

            return true;
        });

        setFilteredCourses(pivotFilteredCourses);
    }, [courses, filter]);

    useEffect(() => {
        applyFilters();
    }, [filter]);

    const value = useMemo(
        () => ({
            activeCourse,
            courses,
            preRequisites,
            unlocked,
            isSidebarOpen,
            filteredCourses,
            selectFilterType,
            setIsSidebarOpen,
            handleSetActiveCourse,
            handleSearch,
            resetActiveCourse,
        }),
        [
            activeCourse,
            courses,
            preRequisites,
            unlocked,
            isSidebarOpen,
            filteredCourses,
            selectFilterType,
            setIsSidebarOpen,
            handleSetActiveCourse,
            handleSearch,
            resetActiveCourse,
        ],
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
