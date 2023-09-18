import styled from 'styled-components';
import { CourseType } from '../../@types/ICourse';
import { getColor } from '../../utils/getColor';

interface ITypeSelectOption {
    type?: CourseType;
}

interface ITypeSelectContainer {
    type: CourseType;
}

interface ITypeSelectContent {
    isOpen: boolean;
    amountOfOptions?: number;
}

export const TypeSelectContainer = styled.div<ITypeSelectContainer>`
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    height: 3rem;
    width: 10rem;
    display: flex;
    gap: 0.5rem;
    background: ${({ type }) => getColor([type])};
    border-radius: 0.5rem;
    padding: 0.75rem;
    position: relative;

    span {
        font-size: 0.75rem;
        height: 100%;
        display: flex;
        align-items: center;
        flex: 1;
    }
`;

export const TypeSelectContent = styled.div<ITypeSelectContent>`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: ${({ isOpen, amountOfOptions = 1 }) =>
        isOpen ? `${(amountOfOptions + 1) * 3}rem` : '0rem'};
    border-radius: 0.5rem;
    transition: height 0.3s ease-in-out;
    overflow: hidden;
    z-index: 100;
`;

export const TypeSelectOption = styled.label<ITypeSelectOption>`
    cursor: pointer;
    width: 100%;
    height: 3rem;
    font-size: 0.75rem;
    padding: 0 0.35rem;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: left;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background: ${({ type, theme }) =>
        type ? getColor([type]) : theme.gray200};
    transition: filter 0.1s ease-in-out;
    &:hover {
        filter: brightness(1.1);
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
