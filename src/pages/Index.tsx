
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Location from '@/components/Location';
import AppPromo from '@/components/AppPromo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cafe-cream">
      <NavBar />
      <Hero />
      <About />
      <Menu />
      <Location />
      <AppPromo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
