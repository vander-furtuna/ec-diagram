import { ECLogo } from '../../assets/logo/ec-logo';
import { SearchInput } from '../../components/SearchInput';
import { useCourse } from '../../hooks/course';
import { HeaderContainer, LogoContainer } from './styles';

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { handleSearch } = useCourse();

  return (
    <HeaderContainer>
      <LogoContainer>
        <ECLogo />
      </LogoContainer>
      <SearchInput onChange={(event) => handleSearch(event.target.value)} />
    </HeaderContainer>
  );
}
