import { InputHTMLAttributes } from 'react';
import { SearchInputContainer } from './styles';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...rest }: SearchInputProps) {
  return (
    <SearchInputContainer>
      <input type="text" {...rest} />
    </SearchInputContainer>
  );
}
