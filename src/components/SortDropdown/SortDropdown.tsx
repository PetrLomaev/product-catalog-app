import React, { useState } from 'react';
import { useProducts } from '@/context/ProductsContext';
import { DropdownContent, DropdownItem, SortButton, SortContainer } from './styled';

const SortDropdown = () => {
  const { activeSortOption, setActiveSortOption } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (option: string) => {
    setActiveSortOption(option);
    setIsOpen(false);
  };

  return (
    <SortContainer>
      <SortButton onClick={() => setIsOpen(!isOpen)}>Показать сначала</SortButton>
      {isOpen && (
        <DropdownContent>
          <DropdownItem
            onClick={() => handleSort('not_sorted')}
            className={activeSortOption === 'not_sorted' ? 'active' : ''}
          >
            Без сортировки
          </DropdownItem>
          <DropdownItem
            onClick={() => handleSort('cheaper_first')}
            className={activeSortOption === 'cheaper_first' ? 'active' : ''}
          >
            Дешевле
          </DropdownItem>
          <DropdownItem
            onClick={() => handleSort('expensive_first')}
            className={activeSortOption === 'expensive_first' ? 'active' : ''}
          >
            Дороже
          </DropdownItem>
        </DropdownContent>
      )}
    </SortContainer>
  );
};

export default SortDropdown;
