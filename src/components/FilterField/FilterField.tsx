import React from 'react';
import { FilterContainer } from './styled';
import SortDropdown from '../SortDropdown/SortDropdown';
import GendersDropdown from '../GendersDropdown/GendersDropdown';

const FilterField: React.FC = () => {
  return (
    <FilterContainer>
      <GendersDropdown />
      <SortDropdown />
    </FilterContainer>
  );
};

export default FilterField;
