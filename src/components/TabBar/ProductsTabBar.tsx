import React from 'react';
import { TabsContainer, TabList, TabItem } from './styled';
import { useProducts } from '@/context/ProductsContext';

const allCategoriesText = 'Все категории';

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
            {category === 'all' ? allCategoriesText : category}
          </TabItem>
        ))}
      </TabList>
    </TabsContainer>
  );
};

export default ProductsTabBar;
