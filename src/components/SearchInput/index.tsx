import { InputHTMLAttributes } from 'react';
import { SearchIconContainer, SearchBarContainer } from './styles';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Filter } from './Filter';

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>

export function SearchBar({ ...rest }: SearchBarProps) {
    return (
        <SearchBarContainer>
            <Filter />
            <input type="text" {...rest} />
            <SearchIconContainer>
                <MagnifyingGlass size={20} weight="bold" />
            </SearchIconContainer>
        </SearchBarContainer>
    );
}
