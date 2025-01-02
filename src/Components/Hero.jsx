import React from "react";
import Navbar from "./Navbar";
import { SlCalender } from "react-icons/sl";
import big from "../assets/big.png"


const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <div className="absolute top-20 left-[10%] text-white max-w-[600px]">
        <p className="text-lg font-medium tracking-wider text-[#00A0B1]">EXPLORE THE WORLD</p>
        <h1 className="text-4xl md:text-6xl text-[#00A0B1]  font-bold leading-tight mt-4">
          Find your dream trip <br />
          <span className="text-black"> & create memorable journey</span>
        </h1>
        <p className="text-lg text-black mt-4">
          Explore, book, and enjoy unforgettable experiences
        </p>

        {/* Input Section */}
        <div className="flex items-center bg-white/5 rounded-lg p-4 mt-8 shadow-lg">
          {/* Date Section */}
          <div className="flex items-center gap-4 border-r border-gray-300 pr-4">
            <div className="bg-[#00A0B1] text-white p-3 rounded-full">
            <SlCalender />

            </div>
            <div>
              <p className="text-black  font-poppins text-lg">When</p>
              <p className="text-lg text-black ">December 2024</p>
            </div>
          </div>

          {/* Button Section */}
          <button className="ml-4 px-6 py-3 bg-[#00A0B1] text-white rounded-lg hover:bg-[#008B9D] transition-all">
            Customize Trip
          </button>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute bottom-[25%] right-[10%] flex flex-col space-y-4">
        <div className="bg-white rounded-xl w-auto h-auto shadow-lg p-4">
          <img
            src={big}
            alt="Explore Labuan Bajo"
            className="w-[200px] h-[120px] rounded-md object-cover"
          />
          <p className="mt-2 text-sm font-semibold">Explore Labuan Bajo</p>
          <p className="text-xs text-gray-500">NTT, Indonesia</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4">
          <img
            src="/path-to-destination-2.jpg"
            alt="La Pirate Hotel"
            className="w-[200px] h-[120px] rounded-md object-cover"
          />
          <p className="mt-2 text-sm font-semibold">La Pirate Hotel</p>
          <p className="text-xs text-gray-500">NTT, Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
