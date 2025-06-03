import React from 'react';
import { TabsContainer, TabList, TabItem } from './styled';
import { useProducts } from '@/context/ProductsContext';

const ProductsTabBar = () => {
  const { activeCategory, setActiveCategory, categories } = useProducts();

  return (
    <TabsContainer>
      <TabList>
        {categories.map((category) => (
          <TabItem
            key={category}
            $isActiveTab={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'all' ? 'Все категории' : category}
          </TabItem>
        ))}
      </TabList>
    </TabsContainer>
  );
};

export default ProductsTabBar;
