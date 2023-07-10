import { theme } from '../../styles/theme';
import { LegendPopUpContainer } from './styles';

interface LegendPopUpProps {}
type LegendType = {
    type: string;
    color: string;
};

export function LegendPopUp({}: LegendPopUpProps) {
    const types: LegendType[] = [
        {
            type: 'Ciências da Computação',
            color: theme.computing300,
        },
        {
            type: 'Automação e Controle',
            color: theme.automation300,
        },
        {
            type: 'Telecomunicações',
            color: theme.telecomunications300,
        },
    ];
    return (
        <LegendPopUpContainer>
            <></>
        </LegendPopUpContainer>
    );
}
