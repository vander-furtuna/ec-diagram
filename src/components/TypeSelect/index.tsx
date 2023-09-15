import { CaretDown } from '@phosphor-icons/react';
import {
    IconContainer,
    TypeSelectContainer,
    TypeSelectContent,
    TypeSelectOption,
} from './styles';
import { CourseType } from '../../@types/ICourse';
import { useState } from 'react';

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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <TypeSelectContainer>
            <span onClick={() => setIsOpen((prev) => !prev)}>
                {internalLabel}
            </span>
            <IconContainer>
                <CaretDown weight="bold" size={16} />
            </IconContainer>
            {isOpen && (
                <TypeSelectContent>
                    {options.map((option) => (
                        <TypeSelectOption type={option.value}>
                            {option.title}
                        </TypeSelectOption>
                    ))}
                </TypeSelectContent>
            )}
        </TypeSelectContainer>
    );
}
