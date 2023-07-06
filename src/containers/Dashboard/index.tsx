import { Header } from '../Header';
import { DashboardContainer } from './styles';

interface DashboardProps {}

export function Dashboard({}: DashboardProps) {
    return (
        <DashboardContainer>
            <Header />
        </DashboardContainer>
    );
}
