import ConsultancyHero from '@/components/sections/ConsultancyHero';
import ConsultancyServices from '@/components/sections/ConsultancyServices';
import ConsultancyProcess from '@/components/sections/ConsultancyProcess';
import ConsultancyTeam from '@/components/sections/ConsultancyTeam';
import ConsultancyFaq from '@/components/sections/ConsultancyFaq';
import ConsultancyCta from '@/components/sections/ConsultancyCta';

export const metadata = {
  title: 'Our Consultancy Services - ASP Solutions',
  description: 'Take your business to the next level with our corporate consultancy services. We provide strategic solutions with our expert team.',
};

export default function ConsultancyPage() {
  return (
    <main>
      <ConsultancyHero />
      <ConsultancyServices />
      <ConsultancyProcess />
      <ConsultancyTeam />
      <ConsultancyFaq />
      <ConsultancyCta />
    </main>
  );
}
