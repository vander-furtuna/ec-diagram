import {
    GearFine,
    Code,
    Broadcast,
    WarningCircle,
} from '@phosphor-icons/react';
import { theme } from '../../styles/theme';
import {
    LegendPopUpContainer,
    LegendPopUpLabel,
    LegendTypeIndicator,
} from './styles';
import { useState } from 'react';

interface LegendPopUpProps {}
type LegendType = {
    type: string;
    color: string;
    Icon: any;
};

export function LegendPopUp({}: LegendPopUpProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const types: LegendType[] = [
        {
            type: 'Disciplina Obrigatória',
            color: theme.background.card.mandatory,
            Icon: <WarningCircle weight="fill" />,
        },
        {
            type: 'Automação e Controle',
            color: theme.automation300,
            Icon: <GearFine weight="fill" />,
        },
        {
            type: 'Ciências da Computação',
            color: theme.computing300,
            Icon: <Code weight="bold" />,
        },
        {
            type: 'Telecomunicações',
            color: theme.telecomunications300,
            Icon: <Broadcast weight="fill" />,
        },
    ];
    return (
        <LegendPopUpContainer onClick={() => setIsOpen((prev) => !prev)}>
            {types.map((type) => (
                <div key={type.color}>
                    <LegendTypeIndicator color={type.color} />
                    {type.Icon}
                    <LegendPopUpLabel isOpen={isOpen}>
                        {type.type}
                    </LegendPopUpLabel>
                </div>
            ))}
        </LegendPopUpContainer>
    );
}
