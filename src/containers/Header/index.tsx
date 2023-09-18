import { ECLogo } from '../../assets/logo/ec-logo';
import { SearchInput } from '../../components/SearchInput';
import { Select } from '../../components/Select';
import { TypeSelect } from '../../components/TypeSelect';
import { useCourse } from '../../hooks/course';
import { hoursOptions, periodOptions, typeOptions } from './data/options';
import { HeaderContainer, LogoContainer, SearchContainer } from './styles';

interface HeaderProps {}

export function Header({}: HeaderProps) {
    const { handleSearch, selectHourFilter, selectPeriodFilter } = useCourse();

    return (
        <HeaderContainer>
            <LogoContainer>
                <ECLogo />
            </LogoContainer>
            <SearchContainer>
                <TypeSelect label="Tipo" options={typeOptions} />
                <Select
                    label="Periódo"
                    options={periodOptions}
                    handleSelect={selectPeriodFilter}
                />
                <Select
                    label="Horas"
                    options={hoursOptions}
                    handleSelect={selectHourFilter}
                />
                <SearchInput
                    onChange={(event) => handleSearch(event.target.value)}
                />
            </SearchContainer>
        </HeaderContainer>
    );
}
