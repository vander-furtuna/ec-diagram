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
    const { activeCourse, preRequisites, unlocked, resetActiveCourse } =
        useCourse();
    return (
        <>
            <InformationSidebarContainer
                isOpen={!!Object.keys(activeCourse).length}
            >
                {!!Object.keys(activeCourse).length && (
                    <InformationSidebarContent>
                        <InformationSidebarHeader type={activeCourse?.type}>
                            <span onClick={resetActiveCourse}>
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
                                        {preRequisites?.map((course) => (
                                            <div
                                                key={`details ${course.code}`}
                                            >{`${course?.code} - ${course?.name}`}</div>
                                        ))}
                                    </Section>
                                )}
                                {unlocked?.length != 0 && (
                                    <Section>
                                        <strong>Desbloqueia:</strong>
                                        {unlocked?.map((course) => (
                                            <div
                                                key={`details ${course.code}`}
                                            >{`${course?.code} - ${course?.name}`}</div>
                                        ))}
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
