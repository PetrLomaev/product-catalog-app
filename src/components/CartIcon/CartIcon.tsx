import React from 'react';
import { CartIconWrapper, Badge, FiShoppingCartStyled } from './styled';
import { useProducts } from '@/context/ProductsContext';

export const CartIcon: React.FC = () => {
  const { cartItems, toggleCart } = useProducts();

  const totalQuantityInCart = cartItems.reduce((sum, cartItem) => {
    return sum + cartItem.quantity;
  }, 0);

  return (
    <CartIconWrapper onClick={toggleCart}>
      <FiShoppingCartStyled />
      {totalQuantityInCart > 0 && <Badge>{totalQuantityInCart}</Badge>}
    </CartIconWrapper>
  );
};
