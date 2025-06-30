import React from 'react';
import ProductsTabBar from '../TabBar/ProductsTabBar';
import ProductsField from '../ProductsField/ProductsField';
import FilterField from '../FilterField/FilterField';
import {
  PageContainer,
  StickyHeader,
  HeaderContent,
  NavigationContainer,
  ContentWrapper,
} from './styled';
import { CartIcon } from '../CartIcon/CartIcon';

const headerText = 'Наши товары';

const MainPage = () => {
  return (
    <PageContainer>
      <StickyHeader>
        <HeaderContent>
          <h1>{headerText}</h1>
          <CartIcon />
        </HeaderContent>
        <NavigationContainer>
          <ProductsTabBar />
        </NavigationContainer>
        <FilterField />
      </StickyHeader>
      <ContentWrapper>
        <ProductsField />
      </ContentWrapper>
    </PageContainer>
  );
};

export default MainPage;
