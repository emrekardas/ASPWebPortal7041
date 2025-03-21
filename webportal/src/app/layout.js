import '@/styles/globals.css';
import NavbarMain from '@/components/navigation/NavbarMain';
import FooterMain from '@/components/navigation/FooterMain';

export const metadata = {
  title: {
    template: '%s | ASP Solutions',
    default: 'ASP Solutions - Cloud Web Portal',
  },
  description: 'ASP Solutions için bulut tabanlı e-ticaret ve hizmet yönetim portalı',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <NavbarMain />
        <div className="flex-grow">
          {children}
        </div>
        <FooterMain />
      </body>
    </html>
  );
}
