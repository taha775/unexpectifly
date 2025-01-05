import React from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import destinationBackground from "../assets/Destination.png";
import des1 from "../assets/des1.png";
import des2 from "../assets/des2.png";
import des3 from "../assets/des3.png";

const Destination = () => {
  const destinations = [
    {
      image: des1,
      title: "Rome Getaway",
      price: "$4,20 Per person",
      duration: "4 Day's",
      rating: "4.5 (22)",
      location: "Rome, Italy",
    },
    {
      image: des2,
      title: "Kaziranga",
      price: "Rs. 23,000/- Per person",
      duration: "6 Day's",
      rating: "4.5 (15)",
      location: "India",
    },
    {
      image: des3,
      title: "Bali Relaxation",
      price: "$100 Per person",
      duration: "4 Day's",
      rating: "4.7 (42)",
      location: "Indonesia",
    },
  ];

  return (
    <div
      className="relative bg-cover  bg-center py-16"
      style={{ backgroundImage: `url(${destinationBackground})` }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-lg font-medium">Discover your perfect getaway!</h2>
        <h1 className="text-4xl font-bold mt-2">
          Explore Our Top <span className="text-[#00A0B1]">Destinations Packages</span>
        </h1>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-[#00A0B1] transition">
            View Packages
          </button>
          <button className="px-6 py-2 bg-[#00A0B1] text-white rounded-lg shadow-lg hover:bg-[#008a99] transition">
            Book Now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-4">
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
            <ArrowLeft className="text-gray-800" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-[33.38px] shadow-lg overflow-hidden transform hover:scale-105 transition"
                style={{
                  width: "308.74px",
                  height: "448.1px",
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="text-yellow-500 w-4 h-4" />
                    <span className="text-sm text-gray-600">{dest.rating}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {dest.title}
                  </h3>
                  <p className="text-[#00A0B1] font-semibold text-sm mt-2">
                    {dest.price}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <span className="mr-4">{dest.duration}</span>
                    <span>{dest.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
            <ArrowRight className="text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
