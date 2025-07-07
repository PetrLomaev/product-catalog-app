import React, { useState } from 'react';
import { useProducts } from '@/context/ProductsContext';
import { DropdownContent, DropdownItem, SortButton, SortContainer } from './styled';

const showAllGendersText = 'Показать все';
const showMaleText = 'Показать мужское';
const showFemaleText = 'Показать женское';

const GendersDropdown: React.FC = () => {
  const { activeGender, setActiveGender, genders } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = (option: string) => {
    setActiveGender(option);
    setIsOpen(false);
  };

  const currentGenderButtonText = () => {
    if (activeGender === 'all') {
      return showAllGendersText;
    }
    if (activeGender === 'male') {
      return showMaleText;
    }
    if (activeGender === 'female') {
      return showFemaleText;
    }
  };

  const showGenderText = (g: string) => {
    if (g === 'all') {
      return showAllGendersText;
    }
    if (g === 'male') {
      return showMaleText;
    }
    if (g === 'female') {
      return showFemaleText;
    }
  };

  return (
    <SortContainer>
      <SortButton onClick={() => setIsOpen(!isOpen)}>{currentGenderButtonText()}</SortButton>
      {isOpen && (
        <DropdownContent>
          {genders.map((gender) => (
            <DropdownItem
              key={gender}
              onClick={() => handleFilter(gender)}
              className={gender === activeGender ? 'active' : ''}
            >
              {showGenderText(gender)}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </SortContainer>
  );
};

export default GendersDropdown;
