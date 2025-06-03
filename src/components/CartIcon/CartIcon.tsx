import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartIconWrapper, Badge } from './styled';
import { useProducts } from '@/context/ProductsContext';

export const CartIcon: React.FC = () => {
  const { cartItems, toggleCart } = useProducts();

  const totalQuantityInCart = cartItems.reduce((sum, cartItem) => {
    return sum + cartItem.quantity;
  }, 0);

  return (
    <CartIconWrapper onClick={toggleCart}>
      <FiShoppingCart size={24} />
      {totalQuantityInCart > 0 && <Badge>{totalQuantityInCart}</Badge>}
    </CartIconWrapper>
  );
};
