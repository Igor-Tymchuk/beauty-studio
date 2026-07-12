import { I18nProvider } from './hooks/useI18n';
import Header from './components/Header';
import Hero from './sections/Hero';
import TransformationJourney from './sections/TransformationJourney';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import Team from './sections/Team';
import BeautyRitual from './sections/BeautyRitual';
import Portfolio from './sections/Portfolio';
import Atmosphere from './sections/Atmosphere';
import Pricing from './sections/Pricing';
import GiftCertificate from './sections/GiftCertificate';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Booking from './sections/Booking';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <TransformationJourney />
          <Services />
          <BeforeAfter />
          <Team />
          <BeautyRitual />
          <Portfolio />
          <Atmosphere />
          <Pricing />
          <GiftCertificate />
          <Reviews />
          <FAQ />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
