import { InputHTMLAttributes } from 'react';
import { SearchIconContainer, SearchInputContainer } from './styles';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...rest }: SearchInputProps) {
    return (
        <SearchInputContainer>
            <input type="text" {...rest} />
            <SearchIconContainer>
                <MagnifyingGlass size={20} weight="bold" />
            </SearchIconContainer>
        </SearchInputContainer>
    );
}
