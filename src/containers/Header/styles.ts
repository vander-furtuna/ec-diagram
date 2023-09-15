import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    gap: 4rem;
    display: flex;
    flex-direction: column;
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

export const SearchContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
`;
