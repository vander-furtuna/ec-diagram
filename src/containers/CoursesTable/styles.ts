import styled from 'styled-components';

export const CoursesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CoursesPeriodContainer = styled.div`
    width: 100%;
    padding: 3rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    grid-auto-rows: 100px;
    justify-items: center;
    grid-auto-flow: dense;
    gap: 2rem;

    &:nth-child(2n) {
        background: ${({ theme }) => theme.white};
    }
    &:nth-child(2n + 1) {
        background: ${({ theme }) => theme.gray100};
    }

    .period-label {
        position: absolute;
        top: 1rem;
        left: 1rem;
        text-transform: uppercase;
        font-size: 0.65rem;
        font-weight: bold;
        color: ${({ theme }) => theme.text.gray};
    }

    @media screen and (max-width: 500px) {
        padding: 3rem 1rem;
    }
`;

export const EmptyMessage = styled.span``;
