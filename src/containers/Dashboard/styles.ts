import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 6rem;
    gap: 4rem;

    @media screen and (max-width: 700px) {
        padding: 2rem 3rem;
    }

    @media screen and (max-width: 500px) {
        padding: 2rem 1rem;
    }
`;
