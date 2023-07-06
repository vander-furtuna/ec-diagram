import styled from 'styled-components';
import { CourseType } from '../../@types/ICourse';
import { theme } from '../../styles/theme';

interface CardProps {
    type: CourseType[];
}

const getCardColor = (type: CourseType[]) => {
    if (type.includes('AUTOMATION') || !type.includes('COMPUTING')) {
        return `linear-gradient(45deg, ${theme.background.automation} 0%, ${theme.background.computing} 100%)`;
    } else {
        return theme.background.automation;
    }

    if (type.includes('COMPUTING')) {
        return theme.background.computing;
    }

    if (type.includes('TELECOMMUNICATIONS')) {
        return theme.background.telecomunications;
    }
};

export const CardContainer = styled.div<CardProps>`
    width: 9rem;
    height: 6rem;
    padding: 1rem;
    background: red;
    border-radius: ${({ theme }) => theme.borderRadius};

    span {
        color: ${({ theme }) => theme.text.normal};
    }
`;
