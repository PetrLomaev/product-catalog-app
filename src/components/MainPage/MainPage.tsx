import React from 'react';
import ProductsTabBar from '../TabBar/ProductsTabBar';
import ProductsField from '../ProductsField/ProductsField';
import FilterField from '../FilterField/FilterField';
import { PageContainer, NavContainer, Header } from './styled';
import { CartIcon } from '../CartIcon/CartIcon';

const headerText = 'Наши товары';

const MainPage = () => {
  return (
    <PageContainer>
      <NavContainer>
        <Header>
          <h1>{headerText}</h1>
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
