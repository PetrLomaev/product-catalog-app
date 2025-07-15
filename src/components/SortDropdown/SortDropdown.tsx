import React, { useCallback, useState } from 'react';
import { useProducts } from '@/context/ProductsContext';
import { SortContainer, SortButton, DropdownContent, DropdownItem } from './styled';
import useClickOutside from '@/hooks/useClickOutside';

const showFirstText = 'Показать сначала';
const notSortedText = 'Без сортировки';
const cheaperFirstText = 'Дешевле';
const expensiveFirstText = 'Дороже';

const SortDropdown = () => {
  const { activeSortOption, setActiveSortOption, sortOptions } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleSort = useCallback(
    (option: string) => {
      setActiveSortOption(option);
      setIsOpen(false);
    },
    [setActiveSortOption],
  );

  const showFirstButtonText = (o: string) => {
    if (o === 'not_sorted') {
      return notSortedText;
    }
    if (o === 'cheaper_first') {
      return cheaperFirstText;
    }
    if (o === 'expensive_first') {
      return expensiveFirstText;
    }
  };

  return (
    <SortContainer ref={dropdownRef}>
      <SortButton onClick={() => setIsOpen(!isOpen)}>{showFirstText}</SortButton>
      {isOpen && (
        <DropdownContent>
          {sortOptions.map((opt) => (
            <DropdownItem
              key={opt}
              onClick={() => handleSort(opt)}
              $active={opt === activeSortOption}
            >
              {showFirstButtonText(opt)}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </SortContainer>
  );
};

export default SortDropdown;
