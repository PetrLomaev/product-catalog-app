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

const cartHeaderText = 'Корзина';
const emptyCartText = 'Корзина пуста';
const rubleIcon = '₽';
const buttonDecreaseSymbol = '-';
const buttonIncreaseSymbol = '+';
const removeButtonText = 'Удалить';
const totalText = 'Итого: ';

const CartModal = () => {
  const {
    cartItems,
    filteredAndSortedProducts,
    removeFromCart,
    isCartOpen,
    toggleCart,
    updateQuantity,
  } = useProducts();

  if (!isCartOpen) {
    return null;
  }

  const getProductById = (productId: string): Product | undefined => {
    return filteredAndSortedProducts.find((product) => product.id === productId);
  };

  const total = cartItems.reduce((sum, cartItem) => {
    const product = getProductById(cartItem.productId);
    return product ? sum + product.price * cartItem.quantity : sum;
  }, 0);

  return (
    <CartOverlay>
      <CartContainer>
        <CartHeader>
          <h2>{cartHeaderText}</h2>
          <CloseButton onClick={toggleCart}>×</CloseButton>
        </CartHeader>
        <CartItems>
          {cartItems.length === 0 ? (
            <EmptyCart>{emptyCartText}</EmptyCart>
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
                      {product.price} {rubleIcon} × {cartItem.quantity} ={' '}
                      {product.price * cartItem.quantity} {rubleIcon}
                    </ItemPrice>
                    <QuantityControls>
                      <ControlButton
                        onClick={() => updateQuantity(cartItem.productId, cartItem.quantity - 1)}
                      >
                        {buttonDecreaseSymbol}
                      </ControlButton>
                      <ControlButton
                        onClick={() => updateQuantity(cartItem.productId, cartItem.quantity + 1)}
                      >
                        {buttonIncreaseSymbol}
                      </ControlButton>
                    </QuantityControls>
                  </ItemInfo>
                  <RemoveButton onClick={() => removeFromCart(cartItem.productId)}>
                    {removeButtonText}
                  </RemoveButton>
                </CartItem>
              );
            })
          )}
        </CartItems>
        <CartTotal>
          {totalText} {total} {rubleIcon}
        </CartTotal>
      </CartContainer>
    </CartOverlay>
  );
};

export default CartModal;
