import { LegendPopUp } from '../../components/LegendPopUp';
import { CoursesTable } from '../CoursesTable';
import { Header } from '../Header';
import { DashboardContainer } from './styles';

interface DashboardProps {}

export function Dashboard({}: DashboardProps) {
    return (
        <DashboardContainer>
            <Header />
            <CoursesTable />
            <LegendPopUp />
        </DashboardContainer>
    );
}
