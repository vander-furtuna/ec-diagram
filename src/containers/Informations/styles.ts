import { styled } from 'styled-components';
import { CourseType } from '../../@types/ICourse';
import { getColor } from '../../utils/getColor';

interface IInformationSidebarContainer {
    isOpen?: boolean;
}

interface IInformationSidebarHeader {
    type?: CourseType[];
}

export const InformationSidebarContainer = styled.aside<IInformationSidebarContainer>`
    transition: 0.5s all ease-in-out;
    width: ${({ isOpen }) => (isOpen ? '20rem' : '0rem')};
    background: transparent;

    @media screen and (max-width: 900px) {
        position: fixed;
        right: 0;
        z-index: 1000;
    }
`;

export const InformationSidebarContent = styled.div`
    position: fixed;
    width: 20rem;
    height: 100vh;
    border-radius: 0.5rem 0 0 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 20px -2px rgba(0, 0, 0, 0.05);
`;

export const InformationSidebarHeader = styled.header<IInformationSidebarHeader>`
    width: 100%;
    height: 12.5rem;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: ${({ type }) => (type ? getColor(type) : 'transparent')};
    transition: 0.3s all ease-in-out;

    h1 {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
    }

    span {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`;

export const InformationSidebarDetails = styled.div`
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.background.card.normal};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y: auto;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 3rem;
        background: ${({ theme }) =>
            `linear-gradient(to top, transparent 0%, ${theme.background.card.normal} 80%)`};
    }
`;

export const InformationSidebarDetailsContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    overflow-y: auto;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        font-weight: 500;
    }
`;
