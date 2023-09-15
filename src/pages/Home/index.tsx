import { Dashboard } from '../../containers/Dashboard';
import { Informations } from '../../containers/Informations';
import { HomeContainer } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <Dashboard />
            <Informations />
        </HomeContainer>
    );
}
