import React from 'react';
import ProductsTabBar from '../TabBar/ProductsTabBar';
import ProductsField from '../ProductsField/ProductsField';
import FilterField from '../FilterField/FilterField';
import { Header, NavContainer, PageContainer } from './styled';
import { CartIcon } from '../CartIcon/CartIcon';

const MainPage = () => {
  return (
    <PageContainer>
      <NavContainer>
        <Header>
          <h1>Наши товары</h1>
          <CartIcon />
        </Header>
        <ProductsTabBar />
        <FilterField />
      </NavContainer>
      <ProductsField />
    </PageContainer>
  );
};

export default MainPage;
