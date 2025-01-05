import React from 'react';
import { Calendar, UserCheck, BookOpen, Smile } from 'lucide-react';
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const BookingProcess = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Images */}
        <div className="relative flex justify-center items-center">
          <div className="w-80 h-80 rounded-full overflow-hidden absolute z-10">
            <img
              src={img1} // Replace with your desert image
              alt="Desert"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <img
              src={img2} // Replace with your pool image
              alt="Pool"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 left-10 w-40 h-40 rounded-full overflow-hidden">
            <img
              src={img3} // Replace with your forest image
              alt="Forest"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-[#00A0B1] text-lg font-semibold">How it Works</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Easy <span className="text-[#00A0B1]">Booking</span> Process
          </h1>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Calendar className="text-[#00A0B1] w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Choose Date</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <UserCheck className="text-[#00A0B1] w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Share Your Preferences</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BookOpen className="text-[#00A0B1] w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Book</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Smile className="text-[#00A0B1] w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Enjoy</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8 space-x-4">
            <button className="px-6 py-2 bg-[#00A0B1] text-white rounded-lg shadow-lg hover:bg-[#008a99] transition">
              Surprise Trip
            </button>
            <button className="px-6 py-2 bg-white text-[#00A0B1] border border-[#00A0B1] rounded-lg shadow-lg hover:bg-gray-100 transition">
              Personalized Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
