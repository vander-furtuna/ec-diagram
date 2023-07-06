import { ECLogo } from '../../assets/logo/ec-logo';
import { SearchInput } from '../../components/SearchInput';
import { HeaderContainer, LogoContainer } from './styles';

interface HeaderProps {}

export function Header({}: HeaderProps) {
    return (
        <HeaderContainer>
            <LogoContainer>
                <ECLogo />
            </LogoContainer>
            <SearchInput />
        </HeaderContainer>
    );
}
