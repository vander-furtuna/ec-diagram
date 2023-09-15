import { X } from '@phosphor-icons/react';
import { useCourse } from '../../hooks/course';
import {
    InformationSidebarContainer,
    InformationSidebarContent,
    InformationSidebarDetails,
    InformationSidebarDetailsContent,
    InformationSidebarHeader,
    Section,
} from './styles';

interface IInformationsProps {
    isOpen?: boolean;
}

export function Informations({}: IInformationsProps) {
    const {
        activeCourse,
        preRequisites,
        unlocked,
        isSidebarOpen,
        setIsSidebarOpen,
    } = useCourse();
    return (
        <>
            <InformationSidebarContainer isOpen={isSidebarOpen}>
                {!!Object.keys(activeCourse).length && (
                    <InformationSidebarContent>
                        <InformationSidebarHeader type={activeCourse?.type}>
                            <span onClick={() => setIsSidebarOpen(false)}>
                                <X size={20} weight="bold" />
                            </span>
                            <h1>{activeCourse.name}</h1>
                        </InformationSidebarHeader>
                        <InformationSidebarDetails>
                            <InformationSidebarDetailsContent>
                                <Section>
                                    <span>
                                        <strong>Código: </strong>
                                        {activeCourse?.code}
                                    </span>
                                    <span>
                                        <strong>Carga horária: </strong>
                                        {`${activeCourse?.duration} h`}
                                    </span>
                                    <span>
                                        <strong>{'Tipo(s): '}</strong>
                                        {activeCourse?.type.join(', ')}
                                    </span>
                                </Section>
                                {preRequisites?.length != 0 && (
                                    <Section>
                                        <strong>Pré-requisitos:</strong>
                                        <ul>
                                            {preRequisites?.map((course) => (
                                                <li
                                                    key={`details ${course.code}`}
                                                >{`${course?.code} - ${course?.name}`}</li>
                                            ))}
                                        </ul>
                                    </Section>
                                )}
                                {unlocked?.length != 0 && (
                                    <Section>
                                        <strong>Desbloqueia:</strong>
                                        <ul>
                                            {unlocked?.map((course) => (
                                                <li
                                                    key={`details ${course.code}`}
                                                >{`${course?.code} - ${course?.name}`}</li>
                                            ))}
                                        </ul>
                                    </Section>
                                )}
                            </InformationSidebarDetailsContent>
                        </InformationSidebarDetails>
                    </InformationSidebarContent>
                )}
            </InformationSidebarContainer>
        </>
    );
}
