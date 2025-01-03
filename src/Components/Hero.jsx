import React from "react";
import { SlCalender } from "react-icons/sl";
import big from "../assets/big.png";
import small from "../assets/small.png";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      {/* Hero Content */}
      <div className="absolute top-20 left-[5%] md:left-[10%] text-white max-w-[90%] md:max-w-[600px]">
        <p className="text-sm md:text-lg font-medium tracking-wider text-[#00A0B1]">
          EXPLORE THE WORLD
        </p>
        <h1 className="text-3xl md:text-6xl   text-[#00A0B1] font-bold leading-tight mt-4">
          Find your dream <br />
          <span className="text-[#00A0B1]">trip</span>
          <span className="text-black"> & create memorable </span>
          <br />
          <span className="text-black">journey</span>
        </h1>
        <p className="text-sm md:text-lg text-black mt-4 md:mt-8">
          Explore, book, and enjoy unforgettable experiences
        </p>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row items-center bg-white/10 rounded-lg p-4 mt-6 md:mt-8 shadow-lg space-y-4 md:space-y-0">
          {/* Date Section */}
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
            <div className="bg-[#00A0B1] text-white p-3 rounded-full">
              <SlCalender />
            </div>
            <div>
              <p className="text-black font-poppins text-sm md:text-lg">When</p>
              <p className="text-sm md:text-lg text-black">December 2024</p>
            </div>
          </div>
          {/* Button Section */}
          <button className="mt-4 md:mt-0 md:ml-4 px-6 py-3 bg-[#00A0B1] text-white rounded-lg hover:bg-[#008B9D] transition-all">
            Customize Trip
          </button>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute bottom-[15%] right-[5%] md:right-[10%]  flex flex-col md:flex-row justify-center md:justify-end items-center gap-24">
  {/* Left-side card */}
  <div className="bg-white rounded-xl shadow-lg p-2 w-[140px] md:w-[200px] hidden md:block">
    <img
      src={big}
      alt="Explore Labuan Bajo"
      className="w-full h-[100px] md:h-[120px] rounded-md object-cover"
    />
    <p className="mt-2 text-xs md:text-sm font-semibold">
      Explore Labuan Bajo
    </p>
    <div className="flex py-2 gap-1">
      <CiLocationOn color="#00A0B1" />
      <p className="text-xs text-gray-500">NTT, Indonesia</p>
    </div>
  </div>

  {/* Right-side card */}
  <div className="bg-white rounded-xl shadow-md p-2 w-[120px] md:w-[140px] relative -mt-6 md:-mt-10 hidden md:block">
    <img
      src={small}
      alt="La Pirate Hotel"
      className="w-full h-[60px] md:h-[80px] rounded-md object-cover"
    />
    <p className="mt-2 text-[8px] md:text-xs font-semibold text-gray-700">
      La Pirate Hotel
    </p>
    <div className="flex items-center py-1 gap-1">
      <CiLocationOn size={16} color="#00A0B1" />
      <p className="text-[8px] md:text-[10px] text-gray-500">
        Flores, Indonesia
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Hero;
