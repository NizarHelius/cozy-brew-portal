
import { useState } from 'react';
import { cn } from '@/lib/utils';

type MenuCategory = 'coffee' | 'food' | 'dessert';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  image?: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('coffee');
  
  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'coffee', label: 'Coffee' },
    { id: 'food', label: 'Food' },
    { id: 'dessert', label: 'Dessert' }
  ];
  
  const menuItems: Record<MenuCategory, MenuItem[]> = {
    coffee: [
      {
        name: 'Signature Latte',
        description: 'Our house specialty with espresso, steamed milk, and hint of vanilla',
        price: '$4.50',
        popular: true,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      },
      {
        name: 'Cold Brew',
        description: 'Smooth, low-acidity coffee brewed for 24 hours',
        price: '$4.25',
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        name: 'Pour Over',
        description: 'Hand-crafted, single-origin coffee made to order',
        price: '$5.00',
        popular: true
      },
      {
        name: 'Espresso',
        description: 'Double shot of our signature espresso blend',
        price: '$3.50'
      }
    ],
    food: [
      {
        name: 'Avocado Toast',
        description: 'Sourdough bread with smashed avocado, olive oil, and sea salt',
        price: '$8.95',
        popular: true,
        image: 'https://images.unsplash.com/photo-1603046891744-76327fa4fc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        name: 'Breakfast Sandwich',
        description: 'Free-range egg, aged cheddar, and arugula on a house-made biscuit',
        price: '$9.50'
      },
      {
        name: 'Grain Bowl',
        description: 'Ancient grains, roasted vegetables, and tahini dressing',
        price: '$11.00',
        popular: true
      },
      {
        name: 'Quiche of the Day',
        description: 'Seasonal ingredients in a flaky butter crust',
        price: '$7.95'
      }
    ],
    dessert: [
      {
        name: 'Chocolate Chip Cookie',
        description: 'House-made with premium chocolate and sea salt',
        price: '$3.50',
        popular: true,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        name: 'Lemon Tart',
        description: 'Buttery shortbread crust with tangy lemon curd',
        price: '$5.95'
      },
      {
        name: 'Seasonal Cheesecake',
        description: 'Creamy cheesecake with seasonal fruit topping',
        price: '$6.50',
        popular: true
      },
      {
        name: 'Cinnamon Roll',
        description: 'Classic cinnamon roll with cream cheese frosting',
        price: '$4.95'
      }
    ]
  };

  return (
    <section id="menu" className="section-padding bg-cafe-cream/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-charcoal mb-4">
            Our Menu
          </h2>
          <div className="w-16 h-1 bg-cafe-gold mx-auto mb-6"></div>
          <p className="text-lg text-cafe-charcoal/80">
            We craft each item with care, using fresh, local ingredients whenever possible. 
            Here's a taste of what we offer.
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full transition-colors font-medium',
                activeCategory === category.id
                  ? 'bg-cafe-mocha text-white'
                  : 'bg-white text-cafe-charcoal hover:bg-cafe-sage/20'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div 
              key={index} 
              className={cn(
                'bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1',
                item.image ? 'md:flex' : ''
              )}
            >
              {item.image && (
                <div className="w-full md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={cn(
                'p-6',
                item.image ? 'md:w-2/3' : 'w-full'
              )}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-cafe-charcoal">
                    {item.name}
                    {item.popular && (
                      <span className="ml-2 inline-block px-2 py-1 text-xs bg-cafe-gold/20 text-cafe-mocha rounded-full">
                        Popular
                      </span>
                    )}
                  </h3>
                  <span className="text-lg font-semibold text-cafe-mocha">{item.price}</span>
                </div>
                <p className="text-cafe-charcoal/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
