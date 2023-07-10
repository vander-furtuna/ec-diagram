import { transparentize } from 'polished';
import styled from 'styled-components';

interface ILegendProps {
    isOpen: boolean;
}

interface ILegendTypeIndicatorProps {
    color: string;
}

export const LegendPopUpContainer = styled.div`
    z-index: 1000;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    transition: 0.3s all ease-in-out;

    color: ${({ theme }) => theme.text.normal};

    background: ${({ theme }) => transparentize(0.5, theme.white)};
    backdrop-filter: blur(20px);
    padding: 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.gray200};

    div {
        display: flex;
        gap: 0.5rem;
    }
`;

export const LegendTypeIndicator = styled.div<ILegendTypeIndicatorProps>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${({ color }) => color};
`;

export const LegendPopUpLabel = styled.span<ILegendProps>`
    display: flex;
    align-items: center;
    line-height: 1;
    transition: all 0.3s ease-in-out;
    font-size: ${({ isOpen }) => (isOpen ? '0.75rem' : '0rem')};
`;

export const LegendPopUpButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;
