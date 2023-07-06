import styled from 'styled-components';

export const CoursesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CoursesPeriodContainer = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  &:nth-child(2n) {
    background: ${({ theme }) => theme.background.secondaryLight};
  }
  &:nth-child(2n + 1) {
    background: ${({ theme }) => theme.background.primaryLight};
  }
`;
