import { useCourse } from '../../hooks/course';
import {
    InformationSidebarContainer,
    InformationSidebarContent,
    InformationSidebarDetails,
    InformationSidebarHeader,
    Section,
} from './styles';

interface IInformationsProps {
    isOpen?: boolean;
}

export function Informations({}: IInformationsProps) {
    const { activeCourse, preRequisites } = useCourse();
    return (
        <>
            <InformationSidebarContainer
                isOpen={!!Object.keys(activeCourse).length}
            >
                <InformationSidebarContent>
                    <InformationSidebarHeader type={activeCourse?.type}>
                        <h1>{activeCourse.name}</h1>
                    </InformationSidebarHeader>
                    <InformationSidebarDetails>
                        <Section>
                            <span>
                                <strong>Código: </strong>
                                {activeCourse.code}
                            </span>
                            <span>
                                <strong>Carga horária: </strong>
                                {`${activeCourse.duration} h`}
                            </span>
                            <span>
                                <strong>{'Tipo(s): '}</strong>
                                {activeCourse.type.join(', ')}
                            </span>
                        </Section>
                        <Section>
                            <strong>Pré-requisitos:</strong>
                            {preRequisites.map((course) => (
                                <div
                                    key={`details ${course.code}`}
                                >{`${course?.code} - ${course?.name}`}</div>
                            ))}
                        </Section>
                    </InformationSidebarDetails>
                </InformationSidebarContent>
            </InformationSidebarContainer>
        </>
    );
}
