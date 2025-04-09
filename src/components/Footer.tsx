
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = {
    about: [
      { label: 'Our Story', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' }
    ],
    menu: [
      { label: 'Coffee', href: '#menu' },
      { label: 'Food', href: '#menu' },
      { label: 'Desserts', href: '#menu' },
      { label: 'Seasonal Specials', href: '#' }
    ],
    visit: [
      { label: 'Locations', href: '#location' },
      { label: 'Hours', href: '#location' },
      { label: 'Events', href: '#' },
      { label: 'Private Bookings', href: '#' }
    ],
    connect: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Loyalty App', href: '#app' },
      { label: 'Newsletter', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  };

  return (
    <footer className="bg-cafe-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-cafe-gold" />
              <span className="text-xl font-serif font-semibold">Cozy Brew</span>
            </div>
            <p className="text-white/70 mb-6">
              A warm place to enjoy premium coffee, connect with others, and feel at home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-cafe-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-cafe-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-cafe-gold transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {links.about.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-cafe-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {links.menu.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-cafe-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit</h4>
            <ul className="space-y-2">
              {links.visit.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-cafe-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {links.connect.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-cafe-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Cozy Brew Café. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-cafe-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cafe-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cafe-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
