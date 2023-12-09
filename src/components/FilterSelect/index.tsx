import { CaretDown } from '@phosphor-icons/react';
import {
    FilterSelectContainer,
    FilterSelectContent,
    FilterSelectOption,
    IconContainer
} from './styles';
import { useState } from 'react';

type FilterSelectOption = {
    title: string;
    value: string;
};

interface FilterSelectProps {
    label: string;
    options: FilterSelectOption[];
    hasColor?: boolean;
    handleSelect: (filter: string | null) => void;
}

export function FilterSelect({ label, options, handleSelect }: FilterSelectProps) {
    const [internalLabel, setInternalLabel] = useState(label);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <FilterSelectContainer onClick={() => setIsOpen((prev) => !prev)}>
            <span>{internalLabel}</span>
            <IconContainer isOpen={isOpen}>
                <CaretDown weight="bold" size={16} />
            </IconContainer>

            <FilterSelectContent isOpen={isOpen} amountOfOptions={options.length}>
                <FilterSelectOption
                    onClick={() => {
                        setInternalLabel(label);
                        handleSelect(null);
                    }}
                >
                    {'Todas'}
                </FilterSelectOption>
                {options.map((option) => (
                    <FilterSelectOption
                        onClick={() => {
                            setInternalLabel(option.title);
                            handleSelect(option.value);
                        }}
                    >
                        {option.title}
                    </FilterSelectOption>
                ))}
            </FilterSelectContent>
        </FilterSelectContainer>
    );
}
