
import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
    { name: 'Loyalty App', href: '#app' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-cafe-mocha" />
          <span className="text-xl font-serif font-semibold text-cafe-mocha">Cozy Brew</span>
        </a>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-cafe-charcoal hover:text-cafe-mocha transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Order Now
          </a>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          'fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl md:hidden transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <X size={24} />
          </button>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-cafe-charcoal hover:text-cafe-mocha transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-4" onClick={closeMenu}>
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
