import React from 'react';
import {
  EmptyState,
  ProductsContainer,
  ProductCardWrapper,
  ProductImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from './styled';
import { useProducts } from '@/context/ProductsContext';
import AddToCardButton from '../AddToCartButton/AddToCartButton';
import type { Product } from '../data/localData';

const productsNotFoundText = 'Товары не найдены';
const rubleIcon = '₽';

const ProductsField = () => {
  const { filteredAndSortedProducts, categories, activeCategory, activeSortOption } = useProducts();

  const getSortedByCategoryProducts = (products: Product[], categories: string[]) => {
    const orderedCategories = categories.slice(1).reduce(
      (acc, category, index) => {
        acc[category] = index;
        return acc;
      },
      {} as Record<string, number>,
    );
    return [...products].sort((a, b) => {
      return orderedCategories[a.category] - orderedCategories[b.category];
    });
  };

  const sortedProducts =
    activeCategory === 'all' && activeSortOption === 'not_sorted'
      ? getSortedByCategoryProducts(filteredAndSortedProducts, categories)
      : filteredAndSortedProducts;

  if (sortedProducts.length === 0) {
    return <EmptyState>{productsNotFoundText}</EmptyState>;
  }

  return (
    <ProductsContainer>
      {sortedProducts.map((product) => (
        <ProductCardWrapper key={product.id}>
          <ProductImageContainer>
            <ProductImage src={product.url} alt={product.name} loading="lazy" />
          </ProductImageContainer>
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              {product.price} {rubleIcon}
            </ProductPrice>
            <AddToCardButton productId={product.id} />
          </ProductInfo>
        </ProductCardWrapper>
      ))}
    </ProductsContainer>
  );
};

export default ProductsField;
