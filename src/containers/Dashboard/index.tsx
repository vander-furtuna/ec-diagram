import { LegendPopUp } from '../../components/LegendPopUp';
import { StatusPopUp } from '../../components/StatusPopUp';
import { useCourse } from '../../hooks/course';
import { CoursesTable } from '../CoursesTable';
import { Header } from '../Header';
import { DashboardContainer } from './styles';

interface DashboardProps {}

export function Dashboard({}: DashboardProps) {
    const { activeCourse } = useCourse();

    return (
        <DashboardContainer>
            <Header />
            <CoursesTable />
            <LegendPopUp />
            <StatusPopUp isActive={!!activeCourse} />
        </DashboardContainer>
    );
}
