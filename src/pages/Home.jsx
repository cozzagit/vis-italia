import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesOverview from '../components/home/ServicesOverview';
import NormativeReferences from '../components/home/NormativeReferences';
import WarehouseProblems from '../components/home/WarehouseProblems';
import RecentArticles from '../components/home/RecentArticles';
import HomeFAQ from '../components/home/HomeFAQ';
import QuickContact from '../components/home/QuickContact';
import CTABanner from '../components/shared/CTABanner';
import FormazioneSection from '../components/home/FormazioneSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <FormazioneSection />
      <NormativeReferences />
      <WarehouseProblems />
      <RecentArticles />
      <HomeFAQ />
      <QuickContact />
      <CTABanner />
    </>
  );
}