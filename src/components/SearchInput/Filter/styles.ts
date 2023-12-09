import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterTrigger = styled.button`
    height: 2rem;
    width: 2rem;
    padding: 0.25rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;
    transition: background 0.2s ease-in-out;
    cursor:  pointer;

    svg {
        color: ${({ theme }) => theme.gray500};
    }

    &:hover {
        background: ${({ theme }) => theme.gray300};
    }
`;

export const FilterContent = styled.div`
    display: flex;
`;