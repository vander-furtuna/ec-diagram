import { useCallback, useEffect } from 'react';
import { Dashboard } from '../../containers/Dashboard';
import { Informations } from '../../containers/Informations';
import { HomeContainer } from './styles';

export function Home() {

    const redirectToExternalSite = useCallback((url: string) => {
        window.location.href = url;
    }, []);

    useEffect(() => {
        redirectToExternalSite('https://ufc-flow.vercel.app/');
    }, [redirectToExternalSite]);

    return (
        <HomeContainer>
            <Dashboard />
            <Informations />
        </HomeContainer>
    );
}
