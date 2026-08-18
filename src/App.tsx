import { useCallback } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Services from '@/components/Services';
import About from '@/components/About';
import PatientInfo from '@/components/PatientInfo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onBook={scrollToContact} />
      <main>
        <Hero onExplore={scrollToContact} />
        <Pillars />
        <Services />
        <About />
        <PatientInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
