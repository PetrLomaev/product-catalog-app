import React from 'react';
import {
  CartOverlay,
  CartContainer,
  CartHeader,
  CloseButton,
  CartItems,
  EmptyCart,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveButton,
  CartTotal,
  QuantityControls,
  ControlButton,
} from './styled';
import { type Product } from '../data/localData';
import { useProducts } from '@/context/ProductsContext';


const CartModal = () => {
  const {
    cartItems,
    filteredProducts,
    removeFromCart,
    isCartOpen,
    toggleCart,
    updateQuantity
  } = useProducts();

  if (!isCartOpen) {
    return null;
  }

  const getProductById = (productId: string): Product | undefined => {
    return filteredProducts.find((product) => product.id === productId);
  };

  const total = cartItems.reduce((sum, cartItem) => {
    const product = getProductById(cartItem.productId);
    return product ? sum + (product.price * cartItem.quantity) : sum;
  }, 0);



  return (
    <CartOverlay>
      <CartContainer>
        <CartHeader>
          <h2>Корзина</h2>
          <CloseButton onClick={toggleCart}>×</CloseButton>
        </CartHeader>
        <CartItems>
          {cartItems.length === 0 ? (
            <EmptyCart>Корзина пуста</EmptyCart>
          ) : (
            cartItems.map((cartItem) => {
              const product = getProductById(cartItem.productId);
              if (!product) return null;

              return (
                <CartItem key={cartItem.productId}>
                  <ItemImage src={product.url} alt={product.name} />
                  <ItemInfo>
                    <ItemName>{product.name}</ItemName>
                    <ItemPrice>
                      {product.price} ₽ × {cartItem.quantity} = 
                      {product.price * cartItem.quantity} ₽
                    </ItemPrice>
                    <QuantityControls>
                      <ControlButton
                        onClick={() => updateQuantity(cartItem.productId, cartItem.quantity - 1)}
                      >
                        -
                      </ControlButton>
                      <ControlButton
                        onClick={() => updateQuantity(cartItem.productId, cartItem.quantity + 1)}
                      >
                        +
                      </ControlButton>
                    </QuantityControls>
                  </ItemInfo>
                  <RemoveButton onClick={() => removeFromCart(cartItem.productId)}>
                    Удалить
                  </RemoveButton>
                </CartItem>
              );
            })
          )}
        </CartItems>

        <CartTotal>
          Итого: {total} ₽
        </CartTotal>
      </CartContainer>
    </CartOverlay>
  );
};

export default CartModal;
