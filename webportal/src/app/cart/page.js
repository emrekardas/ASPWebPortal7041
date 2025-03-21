import { Metadata } from 'next';
import CartPage from '@/components/cart/CartPage';

export const metadata = {
  title: 'Alışveriş Sepeti',
  description: 'ASP Solutions alışveriş sepetiniz - ürünlerinizi görüntüleyin ve düzenleyin.',
};

export default function Cart() {
  return <CartPage />;
}
