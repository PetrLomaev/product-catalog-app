import React from 'react';
import { useProducts } from '@/context/ProductsContext';
import { FilterContainer, FilterButton } from './styled';
import SortDropdown from '../SortDropdown/SortDropdown';

const showAllGendersText = 'Показать все';
const showMaleText = 'Показать мужское';
const showFemaleText = 'Показать женское';

const FilterField: React.FC = () => {
  const { activeGender, setActiveGender, genders } = useProducts();

  return (
    <FilterContainer>
      {genders.map((gender) => (
        <FilterButton
          key={gender}
          $isActive={activeGender === gender}
          onClick={() => setActiveGender(gender)}
        >
          {gender === 'all'
            ? showAllGendersText
            : gender === 'male'
              ? showMaleText
              : showFemaleText}
        </FilterButton>
      ))}
      <SortDropdown />
    </FilterContainer>
  );
};

export default FilterField;
