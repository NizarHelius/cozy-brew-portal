
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  const hours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 6:00 PM' }
  ];

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-charcoal mb-4">
            Find Us
          </h2>
          <div className="w-16 h-1 bg-cafe-gold mx-auto mb-6"></div>
          <p className="text-lg text-cafe-charcoal/80">
            We're conveniently located in the heart of downtown. 
            Stop by for your daily coffee fix or stay a while and enjoy our cozy atmosphere.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0060152846828!3d40.74142784379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sChelsea%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Cozy Brew Café Location"
            ></iframe>
          </div>
          
          <div className="bg-cafe-cream/30 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-semibold text-cafe-mocha mb-6">
              Visit Us
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-cafe-gold flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-cafe-charcoal mb-1">Address</h4>
                  <p className="text-cafe-charcoal/70">
                    123 Coffee Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-cafe-gold flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-cafe-charcoal mb-1">Hours</h4>
                  <div className="space-y-1">
                    {hours.map((item, index) => (
                      <div key={index} className="flex justify-between text-cafe-charcoal/70">
                        <span>{item.day}</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-cafe-gold flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-cafe-charcoal mb-1">Contact</h4>
                  <p className="text-cafe-charcoal/70">
                    Phone: (555) 123-4567<br />
                    Email: hello@cozybrew.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
