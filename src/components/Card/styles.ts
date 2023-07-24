import styled, { css } from 'styled-components';
import { CourseType } from '../../@types/ICourse';
import { theme } from '../../styles/theme';
import { getCardColor } from '../../utils/getColor';

interface CardProps {
    type: CourseType[];
    isPrerequisite?: boolean;
    isUnlocked?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const CardContainer = styled.div<CardProps>`
    z-index: 2;
    cursor: pointer;
    width: 8rem;
    height: 5rem;
    padding: 1rem;
    background: transparent;
    overflow: hidden;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease-in-out;
    outline: 2px solid transparent;

    ${({ isPrerequisite, isUnlocked, isDisabled }) => {
        if (isPrerequisite) {
            return css`
                outline: 2px solid ${theme.background.card.prerequisite};
            `;
        }

        if (isUnlocked) {
            return css`
                outline: 2px solid ${theme.background.card.unlocked};
            `;
        }

        if (isDisabled) {
            return css`
                /* opacity: 0.5; */
            `;
        }
    }}

    &::before {
        content: '';
        position: absolute;
        transition: 0.3s all ease-in-out;
        z-index: -1;
        top: 0;
        left: 0;
        width: ${({ isActive, isPrerequisite, isUnlocked }) => {
            if ((isPrerequisite || isUnlocked) && !isActive) {
                return '0.75rem';
            } else if (isActive) {
                return '100%';
            } else {
                return '0.25rem';
            }
        }};
        height: 100%;
        background: ${({ type, isPrerequisite = false, isUnlocked = false }) =>
            getCardColor(type, isUnlocked, isPrerequisite)};
    }

    &::after {
        content: '';
        position: absolute;
        transition: 0.2s all ease-in-out;
        z-index: -2;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.background.card.normal};
    }

    span {
        flex: 1;
        color: ${({ theme }) => theme.text.normal};
        font-weight: 500;
        font-size: 0.65rem;
        line-height: 1.4;
        text-align: center;
    }

    &:active {
        transform: scale(0.9);
    }

    &:hover {
        box-shadow: 4px 4px 20px -2px rgba(0, 0, 0, 0.05);
    }
`;
