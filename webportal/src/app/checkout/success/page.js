import { Metadata } from 'next';
import { OrderSuccessPage } from '@/components/checkout';

export const metadata = {
  title: 'Sipariş Tamamlandı',
  description: 'ASP Solutions - Siparişiniz başarıyla tamamlandı',
};

export default function OrderSuccess() {
  return <OrderSuccessPage />;
}
