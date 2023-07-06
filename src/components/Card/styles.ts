import styled from 'styled-components';
import { CourseType } from '../../@types/ICourse';

interface CardProps {
    type: CourseType[];
}

export const CardContainer = styled.div<CardProps>`
    width: 5rem;
    height: 3rem;
    background: red;
    border-radius: 0.5rem;
`;
