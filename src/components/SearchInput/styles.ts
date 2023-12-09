import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.gray200};
    display: flex;
    align-items: center;
    padding: 0.25rem 1rem;

    > input {
        border: 0;
        outline: 0;
        background: transparent;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0 1rem;
    }
`;

export const SearchIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;
    svg {
        color: ${({ theme }) => theme.gray500};
    }
`;
