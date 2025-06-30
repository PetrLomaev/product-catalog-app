import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Product } from '@/components/data/localData';

type CartItem = {
  productId: string;
  quantity: number;
};

type ProductsContextType = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeGender: string;
  setActiveGender: (gender: string) => void;
  filteredAndSortedProducts: Product[];
  categories: string[];
  genders: string[];
  cartItems: CartItem[];
  addToCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  activeSortOption: string;
  setActiveSortOption: (sortOption: string) => void;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{
  products: Product[];
  children: React.ReactNode;
}> = ({ products, children }) => {
  const categories = ['all', ...Array.from(new Set(products.map((product) => product.category)))];
  const genders = ['all', 'male', 'female'];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeGender, setActiveGender] = useState<string>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeSortOption, setActiveSortOption] = useState('not_sorted');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const isCategoryMatch = activeCategory === 'all' || product.category === activeCategory;
      const isGenderMatch = activeGender === 'all' || product.gender === activeGender;
      return isCategoryMatch && isGenderMatch;
    });

    if (activeSortOption === 'cheaper_first') {
      filtered = [...filtered].sort((a, b) => {
        return a.price - b.price;
      });
    } else if (activeSortOption === 'expensive_first') {
      filtered = [...filtered].sort((a, b) => {
        return b.price - a.price;
      });
    }
    return filtered;
  }, [products, activeCategory, activeGender, activeSortOption]);

  const addToCart = (productId: string) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.productId === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { productId: productId, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prev) => {
      if (newQuantity <= 0) {
        return prev.filter((item) => item.productId !== productId);
      }
      return prev.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item,
      );
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.productId !== productId);
    });
  };

  const toggleCart = () => setIsCartOpen((currentState) => !currentState);

  return (
    <ProductsContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        activeGender,
        setActiveGender,
        filteredAndSortedProducts,
        categories,
        genders,
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        isCartOpen,
        toggleCart,
        activeSortOption,
        setActiveSortOption,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
