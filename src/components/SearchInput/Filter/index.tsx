import { useState } from 'react';
import { Sliders } from '@phosphor-icons/react';
import { FilterContainer, FilterContent, FilterTrigger } from './styles';

import { periodOptions, typeOptions } from '../../../containers/Header/data/options';
import { useCourse } from '../../../hooks/course';
import { TypeSelect } from '../../TypeSelect';
import { FilterSelect } from '../../FilterSelect';

export function Filter() {

  const [isAcitve, setIsActive] = useState(false);
  const { handleSearch, selectHourFilter, selectPeriodFilter } = useCourse();

  return (
    <FilterContainer>
      <FilterTrigger onClick={() => setIsActive((prev) => !prev)}>
        <Sliders size={20} weight="bold" />
      </FilterTrigger>
      <FilterContent>
        <TypeSelect label='Tipo' options={typeOptions} />
        <FilterSelect label="Horas" options={periodOptions} handleSelect={selectHourFilter} />
        <FilterSelect label="Periódo" options={periodOptions} handleSelect={selectPeriodFilter} />
      </FilterContent>
    </FilterContainer>
  );
}