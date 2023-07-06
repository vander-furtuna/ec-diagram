import styled from 'styled-components';

export const CoursesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const CoursesPeriodContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    &:nth-child(2n) {
        background: ${({ theme }) => theme.background.secondaryLight};
    }
`;
