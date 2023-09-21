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
    gap: 0.5rem;
    width: 100%;

    @media screen and (max-width: 700px) {
        flex-direction: column-reverse;
        gap: 1rem;
    }
`;

export const SelectContainer = styled.div`
    display: flex;
    width: fit-content;
    gap: 0.5rem;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;
