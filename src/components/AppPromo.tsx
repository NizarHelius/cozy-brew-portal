
import { Star, Clock, Gift } from 'lucide-react';

const AppPromo = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-cafe-gold" />,
      title: 'Earn Rewards',
      description: 'Get points with every purchase and redeem them for free items'
    },
    {
      icon: <Clock className="h-8 w-8 text-cafe-gold" />,
      title: 'Skip the Line',
      description: 'Order ahead and have your coffee ready when you arrive'
    },
    {
      icon: <Gift className="h-8 w-8 text-cafe-gold" />,
      title: 'Exclusive Offers',
      description: 'Get access to app-only promotions and seasonal specials'
    }
  ];

  return (
    <section id="app" className="section-padding bg-cafe-mocha text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Our Loyalty App
            </h2>
            <div className="w-16 h-1 bg-cafe-gold mb-6"></div>
            <p className="text-lg text-white/80 mb-8">
              Enhance your Cozy Brew experience with our mobile app. Order ahead, earn rewards, and stay connected with your favorite café.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 mx-auto max-w-xs animate-float">
              <img 
                src="https://images.unsplash.com/photo-1662474182770-4d28108ad4b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" 
                alt="Cozy Brew App" 
                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
              />
            </div>
            <div className="absolute top-1/4 left-1/4 w-full h-full bg-cafe-sage/20 rounded-[2.5rem] -z-10 transform -translate-x-8 translate-y-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
