import React, { useState } from 'react';
import { useProducts } from '@/context/ProductsContext';
import { DropdownContent, DropdownItem, SortButton, SortContainer } from './styled';

const showFirstText = 'Показать сначала';
const notSortedText = 'Без сортировки';
const cheaperFirstText = 'Дешевле';
const expensiveFirstText = 'Дороже';

const SortDropdown = () => {
  const { activeSortOption, setActiveSortOption } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (option: string) => {
    setActiveSortOption(option);
    setIsOpen(false);
  };

  return (
    <SortContainer>
      <SortButton onClick={() => setIsOpen(!isOpen)}>{showFirstText}</SortButton>
      {isOpen && (
        <DropdownContent>
          <DropdownItem
            onClick={() => handleSort('not_sorted')}
            className={activeSortOption === 'not_sorted' ? 'active' : ''}
          >
            {notSortedText}
          </DropdownItem>
          <DropdownItem
            onClick={() => handleSort('cheaper_first')}
            className={activeSortOption === 'cheaper_first' ? 'active' : ''}
          >
            {cheaperFirstText}
          </DropdownItem>
          <DropdownItem
            onClick={() => handleSort('expensive_first')}
            className={activeSortOption === 'expensive_first' ? 'active' : ''}
          >
            {expensiveFirstText}
          </DropdownItem>
        </DropdownContent>
      )}
    </SortContainer>
  );
};

export default SortDropdown;
