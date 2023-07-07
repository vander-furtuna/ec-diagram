import styled, { css } from 'styled-components';
import { CourseType } from '../../@types/ICourse';
import { theme } from '../../styles/theme';

interface CardProps {
    type: CourseType[];
    isPrerequisite?: boolean;
    isUnlocked?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
}

const getCardColor = (type: CourseType[], isActive: boolean) => {
    if (type.includes('AUTOMATION')) {
        return theme.background.card.automation;
    }

    if (type.includes('COMPUTING')) {
        return theme.background.card.computing;
    }

    if (type.includes('TELECOMMUNICATIONS')) {
        return theme.background.card.telecomunications;
    }

    if (type.includes('MANDATORY')) {
        return theme.background.card.mandatory;
    }

    if (type.includes('AUTOMATION') && type.includes('COMPUTING')) {
        return `linear-gradient(90deg, ${theme.background.card.automation} 50%, ${theme.background.card.computing} 50%)`;
    }

    if (type.includes('AUTOMATION') && type.includes('TELECOMMUNICATIONS')) {
        return `linear-gradient(90deg, ${theme.background.card.automation} 50%, ${theme.background.card.telecomunications} 50%)`;
    }

    if (type.includes('COMPUTING') && type.includes('TELECOMMUNICATIONS')) {
        return `linear-gradient(90deg, ${theme.background.card.computing} 50%, ${theme.background.card.telecomunications} 50%)`;
    }
};

export const CardContainer = styled.div<CardProps>`
    cursor: pointer;
    width: 9rem;
    height: 6rem;
    padding: 1rem;
    background: ${({ type, isActive = false }) => getCardColor(type, isActive)};
    border-radius: ${({ theme }) => theme.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;

    ${({ isPrerequisite, isUnlocked, isActive, isDisabled }) => {
        if (isPrerequisite) {
            return css`
                border: 2px solid red;
            `;
        }

        if (isUnlocked) {
            return css`
                border: 2px solid purple;
            `;
        }

        if (isDisabled) {
            return css`
                /* opacity: 0.5; */
            `;
        }
    }}

    span {
        flex: 1;
        color: ${({ theme }) => theme.text.normal};
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.4;
        text-align: center;
    }

    &:hover {
        box-shadow: 4px 4px 20px -2px rgba(0, 0, 0, 0.05);
    }
`;
