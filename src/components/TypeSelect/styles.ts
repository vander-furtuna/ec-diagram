import styled from 'styled-components';
import { CourseType } from '../../@types/ICourse';
import { getColor } from '../../utils/getColor';

interface ITypeSelectOption {
    type: CourseType;
}

export const TypeSelectContainer = styled.div`
    height: 3rem;
    width: 8rem;
    display: flex;
    background: ${({ theme }) => theme.gray300};
    border-radius: 0.5rem;
    padding: 0.75rem;
    cursor: pointer;
    position: absolute;

    span {
        display: flex;
        align-items: center;
        flex: 1;
    }
`;

export const TypeSelectContent = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: fit-content;
    z-index: 100;
`;

export const TypeSelectOption = styled.div<ITypeSelectOption>`
    width: 100%;
    height: 2.5rem;
    font-size: 0.75rem;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: left;
    background: ${({ type }) => getColor([type])};
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
