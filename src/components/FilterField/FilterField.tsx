import React from "react";
import { useProducts } from "@/context/ProductsContext";
import { FilterContainer, FilterButton } from "./styled";

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
          {gender === 'all' ?
            'Показать все' :
            gender === 'male' ?
              'Показать мужское' :
              'Показать женское'
          }
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default FilterField;
