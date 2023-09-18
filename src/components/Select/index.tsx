import { CaretDown } from '@phosphor-icons/react';
import {
    IconContainer,
    SelectContainer,
    SelectContent,
    SelectOption,
} from './styles';
import { useState } from 'react';

type SelectOption = {
    title: string;
    value: string;
};

interface SelectProps {
    label: string;
    options: SelectOption[];
    hasColor?: boolean;
    handleSelect: (filter: string | null) => void;
}

export function Select({ label, options, handleSelect }: SelectProps) {
    const [internalLabel, setInternalLabel] = useState(label);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SelectContainer onClick={() => setIsOpen((prev) => !prev)}>
            <span>{internalLabel}</span>
            <IconContainer isOpen={isOpen}>
                <CaretDown weight="bold" size={16} />
            </IconContainer>

            <SelectContent isOpen={isOpen} amountOfOptions={options.length}>
                <SelectOption
                    onClick={() => {
                        setInternalLabel(label);
                        handleSelect(null);
                    }}
                >
                    {'Todas'}
                </SelectOption>
                {options.map((option) => (
                    <SelectOption
                        onClick={() => {
                            setInternalLabel(option.title);
                            handleSelect(option.value);
                        }}
                    >
                        {option.title}
                    </SelectOption>
                ))}
            </SelectContent>
        </SelectContainer>
    );
}
