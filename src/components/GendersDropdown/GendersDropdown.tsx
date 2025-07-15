import React, { useCallback, useState } from 'react';
import { useProducts } from '@/context/ProductsContext';
import { SortContainer, SortButton, DropdownContent, DropdownItem } from './styled';
import useClickOutside from '@/hooks/useClickOutside';

const showAllGendersText = 'Показать все';
const showMaleText = 'Показать мужское';
const showFemaleText = 'Показать женское';

const GendersDropdown: React.FC = () => {
  const { activeGender, setActiveGender, genders } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleFilter = useCallback(
    (option: string) => {
      setActiveGender(option);
      setIsOpen(false);
    },
    [setActiveGender],
  );

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
    <SortContainer ref={dropdownRef}>
      <SortButton onClick={() => setIsOpen(!isOpen)}>{currentGenderButtonText()}</SortButton>
      {isOpen && (
        <DropdownContent>
          {genders.map((gender) => (
            <DropdownItem
              key={gender}
              onClick={() => handleFilter(gender)}
              $active={gender === activeGender}
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
