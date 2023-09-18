import { CaretDown } from '@phosphor-icons/react';
import {
    IconContainer,
    TypeSelectContainer,
    TypeSelectContent,
    TypeSelectOption,
} from './styles';
import { CourseType } from '../../@types/ICourse';
import { useState } from 'react';
import { useCourse } from '../../hooks/course';

type CourseTypeOption = {
    title: string;
    value: CourseType;
};

interface TypeSelectProps {
    label: string;
    options: CourseTypeOption[];
}

export function TypeSelect({ label, options }: TypeSelectProps) {
    const [internalLabel, setInternalLabel] = useState(label);
    const [type, setType] = useState<CourseType | null>(CourseType.MANDATORY);
    const [isOpen, setIsOpen] = useState(false);

    const { selectFilterType } = useCourse();

    return (
        <TypeSelectContainer
            onClick={() => setIsOpen((prev) => !prev)}
            type={type}
        >
            <span>{internalLabel}</span>
            <IconContainer isOpen={isOpen}>
                <CaretDown weight="bold" size={16} />
            </IconContainer>

            <TypeSelectContent isOpen={isOpen} amountOfOptions={options.length}>
                <TypeSelectOption
                    onClick={() => {
                        setInternalLabel('Tipo');
                        setType(null);
                        selectFilterType(null);
                    }}
                >
                    {'Todas'}
                </TypeSelectOption>
                {options.map((option) => (
                    <TypeSelectOption
                        type={option.value}
                        onClick={() => {
                            setInternalLabel(option.title);
                            setType(option.value);
                            selectFilterType(option.value);
                        }}
                    >
                        {option.title}
                    </TypeSelectOption>
                ))}
            </TypeSelectContent>
        </TypeSelectContainer>
    );
}
