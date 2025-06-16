import CartModal from '@/components/CartModal/CartModal';
import { productsList } from '@/components/data/localData';
import { ProductsProvider } from '@/context/ProductsContext';
import { GlobalStyles } from '@/styles/global.styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider products={productsList}>
      <GlobalStyles />
      <Component {...pageProps} />
      <CartModal />
    </ProductsProvider>
  );
}
