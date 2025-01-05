import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";
import frame6 from "../assets/frame6.png";

const Categories = () => {
  const cards = [
    { image: img1, frame: frame1, title: "Budget", description: "Affordable trips" },
    { image: img2, frame: frame2, title: "Luxury", description: "High-end travel experiences" },
    { image: img3, frame: frame3, title: "Romance", description: "Intimate escapes" },
    { image: img4, frame: frame4, title: "Beach", description: "Relax on pristine shores" },
    { image: img5, frame: frame5, title: "Family", description: "Fun for all ages" },
    { image: img6, frame: frame6, title: "Culture", description: "Immerse in heritage" },
  ];

  return (
    <div className="mt-10 bg-white py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-gray-700 text-2xl font-semibold">Categories</h1>
        <div className="flex items-center justify-center mt-4">
          <p className="text-black text-4xl font-bold">
            Choose Your <span className="text-[#00A0B1]">Trip</span>
          </p>
        </div>
      </div>

      <div className="flex items-center">
        {/* Left Chevron */}
        <button className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition">
          <ChevronLeft size={24} className="text-gray-700" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full mx-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="w-[190px] h-[290px] rounded-t-[120px] rounded-b-[120px] overflow-hidden mb-4 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <img
                  src={card.frame}
                  alt={`${card.title} Frame`}
                  className="absolute inset-8 mt-48 w-[120px] h-[120px] object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Right Chevron */}
        <button className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition">
          <ChevronRight size={24} className="text-gray-700" />
        </button>

          
      </div>
      <div className='flex justify-center mt-10 items-center '>
        <button className='text-center text-white bg-[#00A0B1] text-3xl font-serif rounded-lg p-4'>Book Your Trip</button>
        </div>



    </div>
  );
};

export default Categories;
