import { Key, LockKeyOpen } from '@phosphor-icons/react';
import { theme } from '../../styles/theme';
import {
    StatusPopUpContainer,
    StatusPopUpLabel,
    StatusTypeIndicator,
} from './styles';
import { useState } from 'react';

interface StatusPopUpProps {
    isActive?: boolean;
}

type StatusType = {
    type: string;
    color: string;
    Icon: any;
};

export function StatusPopUp({ isActive = false }: StatusPopUpProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const types: StatusType[] = [
        {
            type: 'Prerequisito',
            color: theme.background.card.prerequisite,
            Icon: <Key weight="fill" />,
        },
        {
            type: 'Desbloqueada',
            color: theme.background.card.unlocked,
            Icon: <LockKeyOpen weight="fill" />,
        },
    ];
    return (
        <StatusPopUpContainer
            isActive={isActive}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            {types.map((type) => (
                <div key={type.color}>
                    <StatusTypeIndicator color={type.color} />
                    {type.Icon}
                    <StatusPopUpLabel isOpen={isOpen}>
                        {type.type}
                    </StatusPopUpLabel>
                </div>
            ))}
        </StatusPopUpContainer>
    );
}
