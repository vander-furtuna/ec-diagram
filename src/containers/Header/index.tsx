import { ECLogo } from '../../assets/logo/ec-logo';
import { SearchBar } from '../../components/SearchInput';
import { useCourse } from '../../hooks/course';
import {
    HeaderContainer,
    LogoContainer,
    SearchContainer
} from './styles';

export function Header() {
    const { handleSearch, selectHourFilter, selectPeriodFilter } = useCourse();

    return (
        <HeaderContainer>
            <LogoContainer>
                <ECLogo />
            </LogoContainer>
            <SearchContainer>

                <SearchBar
                    onChange={(event) => handleSearch(event.target.value)}
                />
            </SearchContainer>
        </HeaderContainer>
    );
}
