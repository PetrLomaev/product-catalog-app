import React, { useState } from 'react';
import { useProducts } from '@/context/ProductsContext';
import {
  QuantityContainer,
  QuantityControls,
  ControlButton,
  QuantityValue,
  RemoveButton,
  AddButton,
} from './styled';

type AddToCartButtonProps = {
  productId: string;
};

const AddToCardButton = ({ productId }: AddToCartButtonProps) => {

  const { cartItems, addToCart, updateQuantity, removeFromCart } = useProducts();

  const cartItem = cartItems.find((item) => item.productId === productId);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    if (quantity === 0) {
      addToCart(productId);
    } else {
      updateQuantity(productId, quantity + 1);
    }
  };

  const handleRemove = () => {
    if (quantity > 0) {
      updateQuantity(productId, quantity - 1);
    }
  };

  return quantity > 0 ? (
    <QuantityContainer>
      <QuantityControls>
        <ControlButton onClick={handleRemove}>-</ControlButton>
        <QuantityValue>{quantity}</QuantityValue>
        <ControlButton onClick={handleAdd}>+</ControlButton>
      </QuantityControls>
      <RemoveButton onClick={() => removeFromCart(productId)}>
        Удалить из корзины
      </RemoveButton>
    </QuantityContainer>
  ) : (
    <AddButton onClick={handleAdd}>Добавить в корзину</AddButton>
  );
};

export default AddToCardButton;
