import { CourseType } from '../../@types/ICourse';
import { ECLogo } from '../../assets/logo/ec-logo';
import { SearchInput } from '../../components/SearchInput';
import { TypeSelect } from '../../components/TypeSelect';
import { useCourse } from '../../hooks/course';
import { HeaderContainer, LogoContainer, SearchContainer } from './styles';

interface HeaderProps {}

export function Header({}: HeaderProps) {
    const { handleSearch } = useCourse();

    const typeOptions = [
        {
            title: 'Obrigatória',
            value: CourseType.MANDATORY,
        },
        {
            title: 'Automação e Controle',
            value: CourseType.AUTOMATION,
        },
        {
            title: 'Ciências da Computação',
            value: CourseType.COMPUTING,
        },
        {
            title: 'Telecomunicações',
            value: CourseType.TELECOMMUNICATIONS,
        },
    ];

    return (
        <HeaderContainer>
            <LogoContainer>
                <ECLogo />
            </LogoContainer>
            <SearchContainer>
                <TypeSelect label="Tipo" options={typeOptions} />
                <SearchInput
                    onChange={(event) => handleSearch(event.target.value)}
                />
            </SearchContainer>
        </HeaderContainer>
    );
}
