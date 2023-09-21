import { styled } from 'styled-components';
import { CourseType } from '../../@types/ICourse';
import { getColor } from '../../utils/getColor';
import { transparentize } from 'polished';

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
    border-radius: ${({ theme }) => theme.borderRadius} 0 0
        ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 20px -2px rgba(0, 0, 0, 0.1);
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
        cursor: pointer;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`;

export const InformationSidebarDetails = styled.div`
    height: 100%;
    width: 100%;
    background: ${({ theme }) =>
        transparentize(0.5, theme.background.card.normal)};
    backdrop-filter: blur(20px);
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

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3rem;
        background: ${({ theme }) =>
            `linear-gradient(to bottom, transparent 0%, ${theme.background.card.normal} 100%)`};
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

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
    }

    strong {
        font-weight: 500;
    }
`;
