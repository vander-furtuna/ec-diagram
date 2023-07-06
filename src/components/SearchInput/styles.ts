import styled from 'styled-components';

export const SearchInputContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.gray200};

    > input {
        border: 0;
        outline: 0;
        background: transparent;
        flex: 1;
        padding: 1rem;
    }
`;
