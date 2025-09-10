import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import TechnicalPrinciples from '@/components/TechnicalPrinciples';
import ApplicationCases from '@/components/ApplicationCases';
import ProductValue from '@/components/ProductValue';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <TechnicalSpecs />
        <TechnicalPrinciples />
        <ApplicationCases />
        <ProductValue />
      </main>
      <Footer />
    </div>
  );
}