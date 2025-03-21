import { Metadata } from 'next';
import { CheckoutPage } from '@/components/checkout';

export const metadata = {
  title: 'Ödeme',
  description: 'ASP Solutions - Güvenli ödeme sayfası',
};

export default function Checkout() {
  return <CheckoutPage />;
}
