import { SearchInputContainer } from './styles';

interface SearchInputProps {}

export function SearchInput({}: SearchInputProps) {
    return (
        <SearchInputContainer>
            <input type="text" />
        </SearchInputContainer>
    );
}
