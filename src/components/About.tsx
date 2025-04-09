
import { Heart, Users, Coffee } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Coffee className="h-8 w-8 text-cafe-gold" />,
      title: 'Premium Beans',
      description: 'We source only the highest quality beans from sustainable farms around the world.'
    },
    {
      icon: <Users className="h-8 w-8 text-cafe-gold" />,
      title: 'Community Space',
      description: "More than a café, we're a gathering place for friends, colleagues, and neighbors."
    },
    {
      icon: <Heart className="h-8 w-8 text-cafe-gold" />,
      title: 'Made with Love',
      description: 'Every cup is crafted with care by our passionate and skilled baristas.'
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-charcoal mb-4">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-cafe-gold mx-auto mb-6"></div>
          <p className="text-lg text-cafe-charcoal/80">
            Founded in 2020, Cozy Brew began with a simple mission: create a warm, inviting space where quality coffee brings people together. What started as a small corner shop has grown into a beloved community hub where stories are shared and connections are made.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Café interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cafe-sage/30 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cafe-gold/20 rounded-full -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-semibold text-cafe-mocha mb-6">
              A Space Designed for Comfort
            </h3>
            <p className="text-cafe-charcoal/80 mb-8">
              Every element of our café is thoughtfully designed to create an atmosphere where you can relax, focus, or socialize. From our custom-crafted furniture to our carefully curated playlist, we've created a space that feels like a second home.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-cafe-charcoal mb-2">{feature.title}</h4>
                    <p className="text-cafe-charcoal/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
