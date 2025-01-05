import React from 'react';

const WhyChooseUs = () => {
  const services = [
    {
      icon: "✈️",
      title: "Flight Ticket",
      description: "Book hassle-free flights to your dream destination."
    },
    {
      icon: "🏨",
      title: "Accommodation",
      description: "Handpicked hotels, resorts, and villas for a comfortable stay."
    },
    {
      icon: "🎫",
      title: "Packaged Tour",
      description: "Expertly curated tours for an unforgettable experience."
    }
  ];

  const stats = [
    {
      number: "14",
      label: "Years",
      sublabel: "Experience"
    },
    {
      number: "320+",
      label: "Distention",
      sublabel: "Collaboration"
    },
    {
      number: "67+",
      label: "Satisfied",
      sublabel: "Customer"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/600/800" 
              alt="Lantern festival" 
              className="w-full object-cover rounded-lg"
            />
          </div>
          {/* Experience Rating */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
            <p className="text-center mb-2">How Your Experience?</p>
            <div className="flex gap-2">
              {"😡 🙂 😊 😄 😍".split(" ").map((emoji, index) => (
                <span key={index} className="cursor-pointer text-2xl">{emoji}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <h4 className="text-teal-500 font-medium mb-2">Why Choose Us?</h4>
            <h2 className="text-3xl font-bold mb-2">
              We Create the <span className="text-teal-500">Trips</span><br />
              you <span className="text-teal-500">Love</span>
            </h2>
          </div>

          {/* Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-teal-500">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;