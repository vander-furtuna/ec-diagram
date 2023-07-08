import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    gap: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        gap: 2rem;
    }
`;

export const LogoContainer = styled.div`
    height: 3rem;
    svg {
        height: 100%;
        width: auto;
    }
    @media screen and (max-width: 500px) {
        height: 2rem;
    }
`;
