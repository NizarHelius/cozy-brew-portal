
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(245, 245, 220, 0.8), rgba(245, 245, 220, 0.8)), url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cafe-cream/30 to-cafe-cream/70 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-cafe-charcoal mb-6 leading-tight">
            Enjoy the Perfect <span className="text-cafe-mocha">Coffee</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-cafe-charcoal/80 mb-8">
            Artisanal coffee, cozy atmosphere, and a place to call home.
            Visit us today or download our loyalty app to start earning rewards.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className="btn-primary">
              Explore Our Menu
            </a>
            <a href="#app" className="btn-secondary">
              Download Our App
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cafe-charcoal hover:text-cafe-mocha transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cafe-sage/20 rounded-tl-full z-0"></div>
    </section>
  );
};

export default Hero;
