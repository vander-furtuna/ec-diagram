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
`;

export const InformationSidebarContent = styled.div`
    position: fixed;
    width: 20rem;
    height: 100vh;
    border-radius: 0.5rem 0 0 0.5rem;
    overflow: hidden;
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
`;

export const InformationSidebarDetails = styled.div`
    padding: 2rem;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.background.card.normal};
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    strong {
        font-weight: 500;
    }
`;
